"use client";

import { Button } from "@/shared/components/Button";
import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/images/hero.png)" }}
            >
                <div className="absolute inset-0 bg-slate-900/50" />
            </div>

            <Container className="relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl"
                >
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg">
                        Transformando el Futuro con <span className="text-primary  text-emerald-400">Desarrollo Sostenible</span>
                    </h1>
                    <p className="mb-8 text-lg font-medium text-slate-100 md:text-xl drop-shadow-md max-w-2xl mx-auto">
                        EME Consultorías y Asesorías: Expertos en formulación, diseño y ejecución de proyectos de energía, medio ambiente y educación.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0" asChild>
                            <Link href="/services">
                                Nuestros Servicios
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border-white/30" asChild>
                            <Link href="/contact">
                                Contáctanos
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
