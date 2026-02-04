"use client";

import { Container } from "@/shared/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        icon: "/icons/energia-limpia-icon.svg",
        title: "Energía Limpia",
        description: "Desarrollamos proyectos de energías renovables enfocados en la eficiencia energética, implementando sistemas fotovoltaicos que reducen costos y promueven la sostenibilidad.",
        //color: "bg-amber-100 text-amber-600",
    },
    {
        icon: "/icons/service-1.svg",
        title: "Medio Ambiente",
        description: "Ejecutamos iniciativas de conservación ambiental como estufas ecoeficientes, pozos sépticos, reforestaciones y diferentes acciones de restauración, aportando al bienestar de las comunidades.",
        //color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: "/icons/service-2.svg",
        title: "Educación",
        description: "Impulsamos la transformación educativa mediante la dotación tecnológica, la innovación pedagógica y la formación docente, desarrollando proyectos dirigidos a sedes educativas públicas que fortalecen las competencias digitales en entornos escolares",
        //color: "bg-blue-100 text-blue-600",
    },
];

export function HomeServices() {
    return (
        <section id="services" className="py-20 md:py-32 bg-slate-50">
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
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative flex flex-col items-center justify-center text-center overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl h-full"
                        >
                            <motion.div
                                variants={{
                                    hover: {
                                        scale: 1.1,
                                        rotate: -5,
                                        transition: { type: "spring", stiffness: 400, damping: 10 }
                                    }
                                }}
                                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl"
                            >
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={64}
                                    height={64}
                                    className="h-16 w-16 object-contain "
                                />
                            </motion.div>
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
