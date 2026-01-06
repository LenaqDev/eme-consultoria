"use client";

import { Container } from "@/shared/components/Container";
import { Zap, Leaf, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        icon: Zap,
        title: "Energía",
        description: "Desarrollo de proyectos de energías renovables y eficiencia energética para un futuro limpio.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: Leaf,
        title: "Medio Ambiente",
        description: "Evaluación de impacto ambiental y estrategias de conservación para la sostenibilidad territorial.",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: GraduationCap,
        title: "Educación",
        description: "Programas educativos orientados al desarrollo capacidades locales y transformación social.",
        color: "bg-blue-100 text-blue-600",
    },
];

export function HomeServices() {
    return (
        <section className="py-20 md:py-32 bg-slate-50">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        Nuestros Sectores de Acción
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Abordamos desafíos complejos con soluciones integrales en áreas clave para el desarrollo.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl dark:bg-slate-800"
                        >
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}>
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-50">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-slate-600 dark:text-slate-400">
                                {service.description}
                            </p>
                            <Link
                                href="/services"
                                className="inline-flex items-center text-sm font-semibold text-primary hover:text-emerald-700 transition-colors"
                            >
                                Saber más <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
