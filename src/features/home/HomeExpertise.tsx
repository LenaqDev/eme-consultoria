import { Container } from "@/shared/components/Container";
import { Lightbulb, ShieldCheck, Leaf } from "lucide-react";

export function HomeExpertise() {
    return (
        <section className="bg-[#E4E9E2] py-20 text-slate-800">
            <Container>
                <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* First Column: Main Title & Intro */}
                    <div className="flex flex-col justify-center border-r-0 border-slate-300 pr-0 lg:border-r lg:pr-8">
                        <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl">
                            Experticia que genera confianza, resultados que transforman
                        </h2>
                        <p className="text-base leading-relaxed text-slate-700">
                            No solo diseñamos proyectos; construimos soluciones integrales basadas en tres pilares fundamentales.
                        </p>
                    </div>

                    {/* Second Column: Sostenibilidad Real (New) */}
                    <div className="flex flex-col items-center text-center border-r-0 border-slate-300 px-0 lg:border-r lg:px-8">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700">
                            <Leaf className="h-12 w-12" strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Sostenibilidad Real</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Proyectos diseñados para perdurar y regenerar el entorno natural.
                        </p>
                    </div>

                    {/* Third Column: Innovación Social */}
                    <div className="flex flex-col items-center text-center border-r-0 border-slate-300 px-0 lg:border-r lg:px-8">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700">
                            <Lightbulb className="h-12 w-12" strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Innovación Social</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Llevamos tecnología y energía a donde más se necesita, cerrando brechas históricas.
                        </p>
                    </div>

                    {/* Fourth Column: Respaldo Técnico */}
                    <div className="flex flex-col items-center text-center pl-0 lg:pl-8">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-none text-slate-700">
                            <ShieldCheck className="h-12 w-12" strokeWidth={1.5} />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-slate-900">Respaldo Técnico</h3>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Un equipo interdisciplinario que garantiza transparencia, calidad y cumplimiento normativo en cada fase.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
