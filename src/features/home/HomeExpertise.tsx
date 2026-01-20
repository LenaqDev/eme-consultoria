"use client";

import { Container } from "@/shared/components/Container";
import { Lightbulb, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function HomeExpertise() {
    return (
        <section id="about" className="bg-[#E4E9E2] py-20 text-slate-800">
            <Container>
                <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* First Column: Main Title & Intro */}
                    <div className="flex flex-col justify-center border-r-0 border-slate-300 pr-0 lg:border-r lg:pr-8">
                        <h2 className="mb-6 text-lg font-bold leading-tight tracking-tight text-slate-900 md:text-2xl">
                            No solo diseñamos y ejecutamos proyectos; construimos soluciones basadas en tres pilares fundamentales.
                        </h2>
                    </div>

                    {/* Second Column: Sostenibilidad Real (New) */}
                    <div className="flex flex-col items-center text-center border-r-0 border-slate-300 px-0 lg:border-r lg:px-8">
                        <motion.div
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Leaf className="h-12 w-12 text-emerald-600" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Sostenibilidad Real</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Proyectos diseñados para perdurar y regenerar el entorno natural.
                        </p>
                    </div>

                    {/* Third Column: Innovación Social */}
                    <div className="flex flex-col items-center text-center border-r-0 border-slate-300 px-0 lg:border-r lg:px-8">
                        <motion.div
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Lightbulb className="h-12 w-12 text-emerald-600" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Innovación Social</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Llevamos tecnología y energía a donde más se necesita, cerrando brechas históricas.
                        </p>
                    </div>

                    {/* Fourth Column: Respaldo Técnico */}
                    <div className="flex flex-col items-center text-center pl-0 lg:pl-8">
                        <motion.div
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShieldCheck className="h-12 w-12 text-emerald-600" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Respaldo Técnico</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Un equipo interdisciplinario que garantiza transparencia, calidad y cumplimiento normativo en cada fase.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
