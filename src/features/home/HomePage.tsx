import { HomeHero } from "./HomeHero";
import { HomeExpertise } from "./HomeExpertise";
import { HomeServices } from "./HomeServices";
import { HomeProjects } from "./HomeProjects";
import { AboutPage } from "@/features/about/AboutPage";
import { ServicesPage } from "@/features/services/ServicesPage";
import { ContactPage } from "@/features/contact/ContactPage";

export function HomePage() {
    return (
        <>
            <section id="home">
                <HomeHero />
                <HomeExpertise />
            </section>
            <section id="about">
                <AboutPage />
            </section>
            <section id="services">
                <ServicesPage />
            </section>
            <HomeServices />
            <section id="projects">
                <HomeProjects />
            </section>
            <section id="contact">
                <ContactPage />
            </section>
        </>
    );
}
