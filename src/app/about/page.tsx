import { AboutPage } from "@/features/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros - EME Consultorías",
    description: "Conoce nuestra historia, misión y visión en el desarrollo sostenible.",
};

export default function Page() {
    return <AboutPage />;
}
