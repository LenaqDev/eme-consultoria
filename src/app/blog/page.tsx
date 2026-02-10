import { BlogPage } from "@/features/blog/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Noticias, artículos y novedades sobre desarrollo sostenible, energías limpias, medio ambiente y educación en Colombia. Mantente informado con EME Consultorías.",
    keywords: [
        "blog ambiental",
        "noticias desarrollo sostenible",
        "artículos energía limpia",
        "medio ambiente Colombia",
        "sostenibilidad",
    ],
    openGraph: {
        title: "Blog | EME Consultorías",
        description: "Noticias y artículos sobre desarrollo sostenible, energías limpias y medio ambiente en Colombia.",
        url: "https://emeconsultorias.com/blog",
        type: "website",
    },
    alternates: {
        canonical: "https://emeconsultorias.com/blog",
    },
};

export default function Page() {
    return <BlogPage />;
}
