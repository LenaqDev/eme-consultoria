"use client";

import Link from "next/link";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export function HomeProjects() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4 text-secondary">Proyectos Destacados</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Una muestra de nuestro trabajo transformando realidades en todo el territorio nacional.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, 6).map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl border border-slate-100 h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden shrink-0">
                                <Image
                                    src={project.image || "/images/hero.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-2 right-2">
                                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full shadow-sm ${project.status === 'Finalizado' ? 'bg-emerald-600' : 'bg-amber-500'}`}>
                                        {project.progress}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow p-5">
                                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">
                                    {project.location}
                                </span>
                                <h3 className="text-base font-bold text-slate-800 line-clamp-3 mb-4 leading-tight">
                                    {project.title}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/projects">Ver Todos los Proyectos</Link>
                    </Button>
                </div>
            </Container >
        </div >
    );
}
