import { AboutPage } from "@/features/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "EME Consultorías y Asesorías S.A.S. es una empresa colombiana especializada en proyectos de energía, medio ambiente y educación. Conoce nuestro equipo interdisciplinario de profesionales.",
    keywords: [
        "EME Consultorías",
        "consultoría ambiental Colombia",
        "equipo profesional",
        "ingeniería ambiental",
        "gestión de proyectos Colombia",
    ],
    openGraph: {
        title: "Sobre Nosotros | EME Consultorías",
        description: "Empresa colombiana especializada en la formulación, diseño, ejecución y evaluación de proyectos sostenibles. Equipo interdisciplinario de profesionales.",
        url: "https://emeconsultorias.com/about",
        type: "website",
    },
    alternates: {
        canonical: "https://emeconsultorias.com/about",
    },
};

export default function Page() {
    return <AboutPage />;
}
