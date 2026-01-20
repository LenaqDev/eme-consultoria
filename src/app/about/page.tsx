import { AboutPage } from "@/features/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre Nosotros - EME Consultorías",
    description: "Conoce más sobre EME Consultorías y nuestra misión.",
};

export default function Page() {
    return <AboutPage />;
}
