"use client";

import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";

export function AboutPage() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-secondary">Sobre Nosotros</h1>
                    <p className="text-lg text-slate-600">
                        EME Consultorías y Asesorías S.A.S. es una empresa líder en la gestión integral de proyectos.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-100 rounded-2xl h-64 md:h-96 w-full flex items-center justify-center text-slate-400"
                    >
                        {/* Placeholder for image */}
                        <span className="text-sm">Imagen Corporativa</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-secondary ">Nuestra Historia</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Fundada con la visión de transformar territorios, EME Consultorías se ha consolidado como un aliado estratégico para entidades públicas y privadas.
                            Nos especializamos en la estructuración de iniciativas que no solo cumplen objetivos técnicos, sino que generan valor social y ambiental.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Nuestro equipo multidisciplinario combina experiencia técnica con sensibilidad social para entregar soluciones robustas y sostenibles.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                        <h3 className="text-xl font-bold mb-3 text-emerald-800 dark:text-emerald-400">Misión</h3>
                        <p className="text-slate-700">
                            Formular, diseñar, ejecutar y evaluar proyectos de alto impacto que promuevan el desarrollo sostenible en los sectores de energía, medio ambiente y educación.
                        </p>
                    </div>
                    <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                        <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-400">Visión</h3>
                        <p className="text-slate-700">
                            Ser reconocidos a nivel nacional como referentes en la transformación territorial a través de la innovación y la sostenibilidad integral.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
