import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validate reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    // reCAPTCHA v3 returns a score between 0.0 and 1.0
    // Score >= 0.5 is generally considered safe
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // --- Validation ---
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    // --- reCAPTCHA verification ---
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida. Intenta de nuevo." },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        {
          error:
            "No se pudo verificar que eres humano. Intenta de nuevo más tarde.",
        },
        { status: 403 }
      );
    }

    // --- Subject mapping ---
    const subjectMap: Record<string, string> = {
      projects: "Consulta de Proyectos",
      careers: "Trabaja con Nosotros",
      other: "Otro",
    };
    const subjectText = subjectMap[subject] || subject;

    // --- Send email via Resend ---
    const { error } = await resend.emails.send({
      from: "EME Consultorías <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "gerencia@emeconsultorias.com"],
      replyTo: email,
      subject: `[Contacto Web] ${subjectText} - ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #007b8a 0%, #005f6b 100%); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Nuevo Mensaje de Contacto</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Recibido desde el sitio web de EME Consultorías</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Nombre</span>
                  <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</span>
                  <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">
                    <a href="mailto:${email}" style="color: #007b8a; text-decoration: none;">${email}</a>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Asunto</span>
                  <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px; font-weight: 500;">${subjectText}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <span style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Mensaje</span>
                  <div style="margin: 8px 0 0; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #007b8a;">
                    <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #f1f5f9; padding: 16px 24px; text-align: center;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto del sitio web de EME Consultorías.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        error:
          "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.",
      },
      { status: 500 }
    );
  }
}
