"use client";

import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";

export function GalleryPage() {
    const projects = [
        { id: 1, title: "Planta Solar Cauca", category: "Energía", color: "bg-amber-200" },
        { id: 2, title: "Reforestación Meta", category: "Medio Ambiente", color: "bg-emerald-200" },
        { id: 3, title: "Escuela Rural Digital", category: "Educación", color: "bg-blue-200" },
        { id: 4, title: "Estudio de Impacto Eólico", category: "Energía", color: "bg-amber-100" },
        { id: 5, title: "Capacitación Comunitaria", category: "Educación", color: "bg-blue-100" },
        { id: 6, title: "Gestión de Residuos", category: "Medio Ambiente", color: "bg-emerald-100" },
    ];

    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">Galería de Proyectos</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Una muestra de nuestro trabajo transformando realidades en todo el territorio nacional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                        >
                            <div className={`absolute inset-0 ${project.color} opacity-80 group-hover:scale-105 transition-transform duration-500`} />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center p-4">
                                    <span className="block text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
