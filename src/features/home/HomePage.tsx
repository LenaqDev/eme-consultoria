import { HomeHero } from "./HomeHero";
import { HomeServices } from "./HomeServices";

export function HomePage() {
    return (
        <>
            <HomeHero />
            <HomeServices />
            {/* Additional sections like About Brief, CTA could go here */}
        </>
    );
}
