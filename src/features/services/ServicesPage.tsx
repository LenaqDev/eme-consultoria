"use client";

import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

export function ServicesPage() {
    return (
        <div className="pt-32 pb-20 bg-slate-50">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-secondary">
                        Nuestros Servicios
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                        Soluciones especializadas adaptadas a las necesidades de cada territorio y cliente.
                        Combinamos conocimiento técnico con innovación social para ejecutar proyectos que equilibran
                        el progreso humano y el cuidado del planeta.
                    </p>
                </div>

                {/* Services sections */}
                <div className="space-y-24">
                    {services.map((service, idx) => (
                        <motion.section
                            id={service.id}
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-32 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                                <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                                <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
                                <div className={`inline-flex p-3 rounded-xl mb-6 ${service.bgColor}`}>
                                    <Image
                                        src={service.icon}
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-secondary mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                                    {service.fullDescription}
                                </p>
                                <ul className="space-y-5">
                                    {service.items.map((item) => (
                                        <li key={item.title} className="flex gap-4">
                                            <CheckCircle2
                                                className={`h-6 w-6 shrink-0 mt-0.5 ${service.color}`}
                                            />
                                            <div>
                                                <h3 className="font-semibold text-slate-900">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-700 mt-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </Container>
        </div>
    );
}
