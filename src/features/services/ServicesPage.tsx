"use client";

import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import { Zap, Leaf, GraduationCap, CheckCircle2 } from "lucide-react";

export function ServicesPage() {
    const categories = [
        {
            title: "Energía Sostenible",
            icon: Zap,
            items: [
                "Diseño de sistemas fotovoltaicos",
                "Eficiencia energética industrial",
                "Auditorías energéticas",
                "Interventoría de proyectos energéticos"
            ],
            color: "text-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/10"
        },
        {
            title: "Medio Ambiente",
            icon: Leaf,
            items: [
                "Estudios de Impacto Ambiental (EIA)",
                "Planes de Manejo Ambiental",
                "Consultoría en economía circular",
                "Reforestación y paisajismo sostenible"
            ],
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-900/10"
        },
        {
            title: "Educación y Capacitación",
            icon: GraduationCap,
            items: [
                "Talleres de sensibilización ambiental",
                "Capacitación técnica en energías renovables",
                "Formulación de proyectos educativos",
                "Fortalecimiento comunitario"
            ],
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/10"
        }
    ];

    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">Nuestros Servicios</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Soluciones especializadas adaptadas a las necesidades de cada territorio y cliente.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`rounded-2xl p-8 border border-slate-100 shadow-sm ${cat.bg} dark:border-slate-800`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm`}>
                                    <cat.icon className={`h-8 w-8 ${cat.color}`} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{cat.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {cat.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${cat.color}`} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
