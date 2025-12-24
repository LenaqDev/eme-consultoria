import { GalleryPage } from "@/features/gallery/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galería - EME Consultorías",
    description: "Nuestro portafolio de proyectos.",
};

export default function Page() {
    return <GalleryPage />;
}
