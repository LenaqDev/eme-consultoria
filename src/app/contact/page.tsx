import { ContactPage } from "@/features/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto - EME Consultorías",
    description: "Ponte en contacto con nosotros para tus proyectos.",
};

export default function Page() {
    return <ContactPage />;
}
