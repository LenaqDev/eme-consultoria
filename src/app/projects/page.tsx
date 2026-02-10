import { GalleryPage } from "@/features/gallery/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos",
    description: "Portafolio de proyectos ejecutados por EME Consultorías en Colombia: estufas ecoeficientes, energías renovables, restauración ambiental, pozos sépticos y educación tecnológica.",
    keywords: [
        "proyectos ambientales Colombia",
        "estufas ecoeficientes",
        "energías renovables",
        "restauración ambiental",
        "pozos sépticos",
        "educación tecnológica",
        "proyectos sostenibles Huila",
        "proyectos sostenibles Tolima",
        "proyectos sostenibles Caldas",
    ],
    openGraph: {
        title: "Proyectos | EME Consultorías",
        description: "Explora nuestro portafolio de proyectos sostenibles ejecutados en diferentes regiones de Colombia.",
        url: "https://emeconsultorias.com/projects",
        type: "website",
    },
    alternates: {
        canonical: "https://emeconsultorias.com/projects",
    },
};

export default function Page() {
    return <GalleryPage />;
}
