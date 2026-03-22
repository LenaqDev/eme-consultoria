"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/shared/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/services";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

type MediaSlide = {
    id: string;
    type: "video" | "image";
    src?: string;
    image?: string;
    poster?: string;
    title: string;
};

const medioAmbienteVideos: MediaSlide[] = [
    {
        id: "eme-comercial-cut3",
        type: "video",
        src: "/videos/EME_COMERCIAL_CUT3.mp4",
        poster: "/images/project-images/preview_comercial.png", // requested static image preview
        title: "EME Comercial Cut3",
    },
    {
        id: "infografico-eme",
        type: "video",
        src: "/videos/Infografico_EME_1080p_FEB.mp4",
        poster: "/images/project-images/estufa-ecologica2.jpeg", // updated second video preview
        title: "Infográfico EME",
    },
    {
        id: "restauracion-image",
        type: "image",
        image: "/images/project-images/estufa-topaga-boyaca.jpeg",
        title: "Restauración Ambiental",
    }
];

function MedioAmbienteCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldPlay, setShouldPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldPlay(true);
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash === "medio-ambiente") {
            requestAnimationFrame(() => setShouldPlay(true));
        }

        const handleHashChange = () => {
            if (window.location.hash.replace("#", "") === "medio-ambiente") {
                requestAnimationFrame(() => setShouldPlay(true));
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;

        if (shouldPlay) {
            videoRef.current
                .play()
                .catch(() => {
                    // mute + play fallback for browsers that block autoplay with sound
                    videoRef.current?.pause();
                    videoRef.current!.muted = true;
                    videoRef.current?.play().catch(() => {
                        // remain paused if still blocked
                    });
                });
        } else {
            videoRef.current.pause();
        }
    }, [shouldPlay, currentIndex]);

    return (
        <div className="space-y-4" ref={sectionRef} onClick={() => setShouldPlay(true)}>
            <div className="mb-3">
                <h3 className="text-xl font-semibold text-secondary">Galería de videos Medio Ambiente</h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
                {medioAmbienteVideos[currentIndex].type === "video" ? (
                    <video
                        ref={videoRef}
                        key={medioAmbienteVideos[currentIndex].id}
                        className="w-full h-[360px] md:h-[420px] object-cover"
                        poster={medioAmbienteVideos[currentIndex].poster}
                        controls
                        playsInline
                        preload="metadata"
                        loop
                        muted={!shouldPlay}
                        onClick={() => setShouldPlay(true)}
                    >
                        <source
                            src={medioAmbienteVideos[currentIndex].src}
                            type="video/mp4"
                        />
                        Tu navegador no soporta video HTML5.
                    </video>
                ) : (
                    <Image
                        src={medioAmbienteVideos[currentIndex].image ?? ""}
                        alt={medioAmbienteVideos[currentIndex].title}
                        width={1200}
                        height={600}
                        className="w-full h-[360px] md:h-[420px] object-cover"
                    />
                )}

                <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + medioAmbienteVideos.length) % medioAmbienteVideos.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % medioAmbienteVideos.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={24} />
                </button>
            </div>


            <div className="grid grid-cols-3 gap-2">
                {medioAmbienteVideos.map((video, index) => (
                    <button
                        key={video.id}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        className={`overflow-hidden rounded-lg border ${currentIndex === index ? "border-emerald-500" : "border-slate-300"}`}
                        aria-label={`Seleccionar slide ${index + 1}`}
                    >
                        <Image
                            src={video.type === "video" ? video.poster ?? "" : video.image ?? ""}
                            alt={`Vista previa ${video.title}`}
                            width={320}
                            height={180}
                            className="w-full h-20 object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

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
                                {service.id === "medio-ambiente" ? (
                                    <div className="rounded-2xl overflow-hidden shadow-xl">
                                        <MedioAmbienteCarousel />
                                    </div>
                                ) : (
                                    <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                )}
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
