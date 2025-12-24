"use client";

import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "La Importancia de las Energías Renovables en Colombia",
            excerpt: "Exploramos cómo la transición energética está transformando el panorama económico y social del país.",
            date: "Oct 24, 2024",
            author: "Admin",
            category: "Energía"
        },
        {
            id: 2,
            title: "Desarrollo Sostenible y Comunidades Locales",
            excerpt: "Un enfoque integral sobre cómo los proyectos de infraestructura pueden beneficiar directamente a las comunidades.",
            date: "Nov 12, 2024",
            author: "Equipo EME",
            category: "Sociedad"
        },
        {
            id: 3,
            title: "Educación Ambiental: El Primer Paso para el Cambio",
            excerpt: "Iniciativas educativas que están marcando la diferencia en la conservación de nuestros recursos naturales.",
            date: "Dec 05, 2024",
            author: "Admin",
            category: "Educación"
        }
    ];

    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">Blog y Noticias</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Actualidad, reflexiones y novedades sobre nuestros proyectos y el sector.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-slate-200 dark:bg-slate-700 w-full animate-pulse" /> {/* Placeholder for blog image */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-50 line-clamp-2">
                                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>
                                <Button variant="link" asChild className="p-0 h-auto justify-start text-primary">
                                    <Link href={`/blog/${post.id}`}>
                                        Leer artículo <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </div>
    );
}
