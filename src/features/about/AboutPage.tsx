"use client";

import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";

export function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-50">
            <Container>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-6 text-secondary">Sobre Nosotros</h1>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
                </div>

                {/* Main Content - Quiénes Somos */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">¿Quiénes somos?</h2>
                        <div className="prose prose-lg text-slate-600 space-y-4">
                            <p>
                                <span className="font-bold text-emerald-600">EME Consultorías y Asesorías S.A.S.</span> es una empresa colombiana especializada en la formulación, diseño, ejecución y evaluación de proyectos en diversos sectores estratégicos, entre ellos energía, medio ambiente y educación, con un enfoque orientado al desarrollo sostenible y la transformación territorial.
                            </p>
                            <p>
                                Nuestra labor se enfoca en la estructuración e implementación de iniciativas que promueven el uso eficiente y responsable de los recursos naturales, la adopción de energías limpias, la gestión ambiental integral y el fortalecimiento de capacidades institucionales y comunitarias, apoyadas en procesos educativos y soluciones tecnológicas.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        {/* Placeholder for an image - can be replaced with a real team or office photo */}
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                            {/* You can add an <Image /> here later */}
                            <span className="text-slate-400 font-medium">Imagen Corporativa / Equipo</span>
                        </div>
                    </motion.div>
                </div>

                {/* Nuestro Equipo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">Nuestro Equipo</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            La empresa cuenta con un equipo técnico interdisciplinario conformado por profesionales en ingeniería, ciencias ambientales, educación y gestión de proyectos, lo que nos permite garantizar altos estándares de calidad, transparencia y cumplimiento en cada una de nuestras intervenciones.
                        </p>
                    </div>
                </motion.div>

            </Container>
        </div>
    );
}
