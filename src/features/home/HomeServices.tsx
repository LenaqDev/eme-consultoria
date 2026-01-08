"use client";

import { Container } from "@/shared/components/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        icon: "/icons/service-1.svg",
        title: "Gestión Ambiental",
        description: "Restauramos ecosistemas y protegemos el agua mediante reforestación y saneamiento rural.",
        //color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: "/icons/energia-limpia-icon.svg",
        title: "Energía Limpia",
        description: "Llevamos luz y eficiencia con sistemas fotovoltaicos y soluciones termoeléctricas rurales.",
        //color: "bg-amber-100 text-amber-600",
    },
    {
        icon: "/icons/service-2.svg",
        title: "Educación y Tecnología",
        description: "Cerramos la brecha digital con infraestructura tecnológica y formación pedagógica de calidad.",
        //color: "bg-blue-100 text-blue-600",
    },
];

export function HomeServices() {
    return (
        <section className="py-20 md:py-32 bg-slate-50">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                        Nuestros Sectores de Acción
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Combinamos conocimiento técnico con innovación social para ejecutar proyectos que equilibran el progreso humano y el cuidado del planeta.
                        <span className="text-secondary"> Conoce nuestras áreas de especialidad:</span>
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
                            className="group relative flex flex-col items-center justify-center text-center overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl h-full"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={64}
                                    height={64}
                                    className="h-16 w-16 object-contain "
                                />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                {service.title}
                            </h3>
                            <p className="mb-6 text-slate-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
