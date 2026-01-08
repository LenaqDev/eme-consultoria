"use client";

import { Button } from "@/shared/components/Button";
import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/herov3.png)" }}
            >
                <div className="absolute inset-0 bg-slate-900/50" />
            </div>

            <Container className="relative z-10 text-left text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-3xl lg:text-4xl drop-shadow-lg">
                        Transformando el Futuro <br /> con Desarrollo Sostenible
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white hover:bg-white hover:text-black transition-colors rounded-none px-8 py-6 tracking-wider"
                            asChild
                        >
                            <Link href="/#about">
                                Conoce más
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
