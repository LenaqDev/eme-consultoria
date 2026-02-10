import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { cn } from "@/shared/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://emeconsultorias.com"),
  title: {
    default: "EME Consultorías | Proyectos Sostenibles en Colombia",
    template: "%s | EME Consultorías",
  },
  description: "Empresa colombiana especializada en formulación, diseño, ejecución y evaluación de proyectos en energía limpia, medio ambiente y educación. Desarrollo sostenible y transformación territorial.",
  keywords: [
    "consultoría ambiental Colombia",
    "proyectos sostenibles",
    "energía limpia",
    "estufas ecoeficientes",
    "desarrollo sostenible",
    "medio ambiente",
    "educación tecnológica",
    "gestión ambiental",
    "energías renovables Colombia",
    "consultoría energética",
    "pozos sépticos",
    "reforestación",
    "EME Consultorías",
  ],
  authors: [{ name: "EME Consultorías y Asesorías S.A.S." }],
  creator: "EME Consultorías y Asesorías S.A.S.",
  publisher: "EME Consultorías y Asesorías S.A.S.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://emeconsultorias.com",
    siteName: "EME Consultorías",
    title: "EME Consultorías | Proyectos Sostenibles en Colombia",
    description: "Empresa colombiana especializada en formulación, diseño, ejecución y evaluación de proyectos en energía limpia, medio ambiente y educación. Desarrollo sostenible y transformación territorial.",
    images: [
      {
        url: "/images/herov3.png",
        width: 1200,
        height: 630,
        alt: "EME Consultorías - Desarrollo Sostenible en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EME Consultorías | Proyectos Sostenibles en Colombia",
    description: "Empresa colombiana especializada en formulación, diseño, ejecución y evaluación de proyectos en energía limpia, medio ambiente y educación.",
    images: ["/images/herov3.png"],
  },
  alternates: {
    canonical: "https://emeconsultorias.com",
  },
  category: "Consultoría Ambiental",
  manifest: "/favicon/manifest.json",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", url: "/favicon/ms-icon-144x144.png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#043F79",
    "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
    "geo.region": "CO",
    "geo.placename": "Colombia",
    "content-language": "es-CO",
  },
  verification: {
    // Agregar cuando tengas los códigos de verificación
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHPXLMXH');`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EME Consultorías y Asesorías S.A.S.",
              alternateName: "EME Consultorías",
              url: "https://emeconsultorias.com",
              logo: "https://emeconsultorias.com/Logo-E.M.E.blanco.png",
              description: "Empresa colombiana especializada en formulación, diseño, ejecución y evaluación de proyectos en energía limpia, medio ambiente y educación.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressLocality: "Colombia",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              sameAs: [],
              serviceType: [
                "Consultoría Ambiental",
                "Proyectos de Energía Limpia",
                "Gestión Ambiental",
                "Educación Tecnológica",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "EME Consultorías",
              url: "https://emeconsultorias.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://emeconsultorias.com/projects?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHPXLMXH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
