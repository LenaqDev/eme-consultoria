"use client";

import { Button } from "@/shared/components/Button";
import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactPage() {
    return (
        <div className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">Contáctanos</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Estamos listos para escuchar tus necesidades y desarrollar proyectos juntos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 md:col-span-1"
                    >
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-50">Información</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600 dark:bg-emerald-900/30">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Ubicación</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Bogotá, Colombia</p>
                                        <p className="text-sm text-slate-500">Oficina Principal</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 dark:bg-blue-900/30">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Email</h4>
                                        <p className="text-slate-600 dark:text-slate-400">info@emeconsultorias.com</p>
                                        <p className="text-sm text-slate-500">Respuesta en 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-amber-100 rounded-lg text-amber-600 dark:bg-amber-900/30">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Teléfono</h4>
                                        <p className="text-slate-600 dark:text-slate-400">+57 601 123 4567</p>
                                        <p className="text-sm text-slate-500">Lunes a Viernes, 8am - 5pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">Envíanos un mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Nombre Completo
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Tu nombre"
                                        className="w-full rounded-md border border-slate-300 bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="w-full rounded-md border border-slate-300 bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Asunto
                                </label>
                                <select
                                    id="subject"
                                    className="w-full rounded-md border border-slate-300 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    <option value="projects">Consulta de Proyectos</option>
                                    <option value="careers">Trabaja con Nosotros</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="¿Cómo podemos ayudarte?"
                                    className="w-full rounded-md border border-slate-300 bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700"
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button size="lg" className="w-full md:w-auto">
                                    <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
