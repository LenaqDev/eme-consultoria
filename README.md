# EME Consultorías | Sitio Web Corporativo

Sitio web oficial de **EME Consultorías y Asesorías S.A.S.**, empresa colombiana especializada en formulación, diseño, ejecución y evaluación de proyectos sostenibles en energía, medio ambiente y educación.

**URL:** [emeconsultorias.com](https://emeconsultorias.com)

---

## Sobre el proyecto

La web presenta los sectores de acción de la empresa, su portafolio de proyectos, equipo y canales de contacto. Incluye:

- **Inicio:** Hero, sectores de acción, proyectos destacados y formulario de contacto
- **Sobre Nosotros:** Quiénes somos y equipo técnico
- **Servicios:** Detalle de Energía, Medio Ambiente y Educación con imágenes y descripciones
- **Proyectos:** Galería de proyectos ejecutados (estufas ecoeficientes, reforestación, educación TIC, etc.)
- **Blog:** Publicaciones y noticias
- **Contacto:** Formulario con validación, reCAPTCHA v3 y envío de emails vía Resend

---

## Stack tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript |
| **UI / Estilos** | Tailwind CSS 4 |
| **Animaciones** | Framer Motion |
| **Componentes** | Radix UI, Lucide React |
| **Emails** | Resend |
| **Seguridad** | Google reCAPTCHA v3 |
| **Analytics** | Google Tag Manager, GA4 |

---

## Estructura del proyecto

```
src/
├── app/                    # App Router (rutas, layout, API)
│   ├── api/contact/        # API de formulario de contacto
│   ├── about/
│   ├── blog/
│   ├── projects/
│   └── services/
├── features/               # Páginas y secciones por feature
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── blog/
├── shared/
│   ├── components/         # Navbar, Footer, Button, Container
│   └── lib/                # Utilidades
└── data/                   # Datos estáticos (proyectos, servicios)
```

---

## Desarrollo

### Requisitos

- [Bun](https://bun.sh) (recomendado) o Node.js 18+

### Instalación

```bash
bun install
```

### Variables de entorno

Copia `.env.example` a `.env.local` y configura:

```env
# Resend - envío de emails
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL=gerencia@emeconsultorias.com

# reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxx
RECAPTCHA_SECRET_KEY=6Lxxxx
```

**Modo desarrollo:** Sin variables configuradas, el formulario de contacto funciona en modo simulado (no envía emails reales).

### Comandos

```bash
bun run dev    # Servidor de desarrollo (http://localhost:3000)
bun run build  # Build de producción
bun run start  # Servidor de producción
bun run lint   # Linter
```

---

## Mejoras implementadas

- **SEO:** Metadata, Open Graph, JSON-LD, canonical URLs
- **Accesibilidad:** Contraste de texto, modo claro forzado
- **Rendimiento:** Next.js Image, optimización de fuentes
- **UX:** Animaciones con Framer Motion, feedback visual en formulario
- **Seguridad:** reCAPTCHA v3, validación de campos
- **Modo desarrollo:** Pruebas del formulario sin API keys

---

## Despliegue

Compatible con Vercel, Netlify y cualquier plataforma que soporte Next.js. Configura las variables de entorno en el panel de tu proveedor.

---

## Licencia

Proyecto privado de EME Consultorías y Asesorías S.A.S.
