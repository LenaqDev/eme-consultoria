"use client";

import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useParams } from "next/navigation";

export function BlogPostPage() {
    const { id } = useParams();

    return (
        <article className="pt-32 pb-20 bg-background">
            <Container className="max-w-3xl">
                <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary relative z-10">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Blog
                    </Link>
                </Button>

                <header className="mb-10">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Oct 24, 2024</span>
                        <span className="flex items-center gap-1"><User className="h-4 w-4" /> Admin</span>
                        <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> Energía</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        La Importancia de las Energías Renovables en Colombia (Post #{id})
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Colombia tiene un potencial inmenso para liderar la transición energética en la región. En este artículo exploramos las claves de este proceso.
                    </p>
                </header>

                <div className="h-[400px] bg-slate-200  rounded-2xl mb-12 w-full" />

                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>El Contexto Actual</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <blockquote>
                        "La sostenibilidad no es una opción, es el único camino hacia el futuro."
                    </blockquote>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </Container>
        </article>
    );
}
