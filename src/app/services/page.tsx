import { ServicesPage } from "@/features/services/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios",
    description:
        "EME Consultorías ofrece servicios en energía limpia, medio ambiente y educación. Proyectos solares, estufas ecoeficientes, reforestación, dotación tecnológica y formación docente.",
    keywords: [
        "energía solar",
        "estufas ecoeficientes",
        "medio ambiente",
        "educación TIC",
        "hidrógeno verde",
        "reforestación",
        "pozos sépticos",
        "EME Consultorías",
    ],
    openGraph: {
        title: "Servicios | EME Consultorías",
        description:
            "Soluciones en energía limpia, conservación ambiental y educación. Proyectos sostenibles en Colombia.",
        url: "https://emeconsultorias.com/services",
        type: "website",
    },
    alternates: {
        canonical: "https://emeconsultorias.com/services",
    },
};

export default function Page() {
    return <ServicesPage />;
}
