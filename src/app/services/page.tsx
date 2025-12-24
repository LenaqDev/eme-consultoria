import { ServicesPage } from "@/features/services/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios - EME Consultorías",
    description: "Nuestros servicios en energía, medio ambiente y educación.",
};

export default function Page() {
    return <ServicesPage />;
}
