"use client";

import { Button } from "@/shared/components/Button";
import { Container } from "@/shared/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

// reCAPTCHA v3 site key from environment variable
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// Load reCAPTCHA v3 script dynamically
function useRecaptcha() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!RECAPTCHA_SITE_KEY) {
            console.warn("reCAPTCHA site key is not configured");
            return;
        }

        // Check if already loaded
        if (document.querySelector(`script[src*="recaptcha"]`)) {
            setIsReady(true);
            return;
        }

        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setIsReady(true);
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup not needed as recaptcha persists
        };
    }, []);

    const executeRecaptcha = useCallback(
        async (action: string): Promise<string | null> => {
            if (!isReady || !RECAPTCHA_SITE_KEY) return null;

            try {
                const token = await (window as unknown as { grecaptcha: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha.execute(
                    RECAPTCHA_SITE_KEY,
                    { action }
                );
                return token;
            } catch (error) {
                console.error("reCAPTCHA execution failed:", error);
                return null;
            }
        },
        [isReady]
    );

    return { isReady, executeRecaptcha };
}

export function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
    const [responseMessage, setResponseMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const { isReady: recaptchaReady, executeRecaptcha } = useRecaptcha();

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        // Clear error on change
        if (errors[id as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [id]: undefined }));
        }
    };

    // Validate form
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es obligatorio.";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "El nombre debe tener al menos 2 caracteres.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Ingresa un correo electrónico válido.";
        }

        if (!formData.subject) {
            newErrors.subject = "Selecciona un asunto.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es obligatorio.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setSubmitStatus("loading");
        setResponseMessage("");

        try {
            // Execute reCAPTCHA (en desarrollo sin key: usar dev-bypass para pruebas)
            let recaptchaToken = await executeRecaptcha("contact_form");
            if (!recaptchaToken && !RECAPTCHA_SITE_KEY && process.env.NODE_ENV === "development") {
                recaptchaToken = "dev-bypass";
            }

            if (!recaptchaToken && RECAPTCHA_SITE_KEY) {
                setSubmitStatus("error");
                setResponseMessage(
                    "No se pudo verificar la seguridad. Recarga la página e intenta de nuevo."
                );
                return;
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setResponseMessage(
                    data.message || "¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto."
                );
                // Reset form
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitStatus("error");
                setResponseMessage(
                    data.error || "Hubo un error al enviar el mensaje. Intenta de nuevo."
                );
            }
        } catch {
            setSubmitStatus("error");
            setResponseMessage(
                "Error de conexión. Verifica tu internet e intenta de nuevo."
            );
        }
    };

    // Auto-hide success/error message after 8 seconds
    useEffect(() => {
        if (submitStatus === "success" || submitStatus === "error") {
            const timer = setTimeout(() => {
                setSubmitStatus("idle");
                setResponseMessage("");
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    return (
        <div className="py-20 bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-secondary">Contáctanos</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                        <div className="bg-white  p-6 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-bold mb-6 text-slate-900">Información</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-emerald-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 ">Ubicación</h4>
                                        <p className="text-slate-600">Bogotá, Colombia</p>
                                        <p className="text-sm text-slate-500">Oficina Principal</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-blue-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Email</h4>
                                        <p className="text-slate-600">gerencia@emeconsultorias.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 text-amber-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Teléfono</h4>
                                        <p className="text-slate-600 ">+57 3107819640</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* reCAPTCHA badge indicator */}
                        <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
                            <ShieldCheck className="h-4 w-4" />
                            <span>
                                Protegido por Google reCAPTCHA
                            </span>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 bg-white  p-8 rounded-2xl shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Envíanos un mensaje</h3>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
                                >
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                                    <p className="text-sm text-emerald-800">{responseMessage}</p>
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                                >
                                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                                    <p className="text-sm text-red-800">{responseMessage}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                        Nombre Completo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        className={`w-full rounded-md border ${errors.name ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"
                                            } bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700 transition-colors`}
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 ">
                                        Correo Electrónico <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="tu@email.com"
                                        className={`w-full rounded-md border ${errors.email ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"
                                            } bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700 transition-colors`}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                                    Asunto <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border ${errors.subject ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"
                                        } bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700 transition-colors`}
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    <option value="projects">Consulta de Proyectos</option>
                                    <option value="careers">Trabaja con Nosotros</option>
                                    <option value="other">Otro</option>
                                </select>
                                {errors.subject && (
                                    <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                    Mensaje <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="¿Cómo podemos ayudarte?"
                                    className={`w-full rounded-md border ${errors.message ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"
                                        } bg-background px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-slate-700 transition-colors`}
                                />
                                {errors.message && (
                                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full md:w-auto"
                                    disabled={submitStatus === "loading"}
                                >
                                    {submitStatus === "loading" ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Enviar Mensaje
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
