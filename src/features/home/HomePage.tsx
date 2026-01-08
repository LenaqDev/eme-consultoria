import { HomeHero } from "./HomeHero";
import { HomeExpertise } from "./HomeExpertise";
import { HomeServices } from "./HomeServices";
import { HomeProjects } from "./HomeProjects";
import { HomeCallToAction } from "./HomeCallToAction";
import { ContactPage } from "@/features/contact/ContactPage";

export function HomePage() {
    return (
        <>
            <section id="home">
                <HomeHero />
                <HomeExpertise />
            </section>
            <HomeServices />
            <section id="projects">
                <HomeProjects />
            </section>
            <HomeCallToAction />
            <section id="contact">
                <ContactPage />
            </section>
        </>
    );
}
