import { Container } from "@/shared/components/Container";
import Image from "next/image";

export function HomeCallToAction() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-20 text-center shadow-2xl sm:px-12 md:py-32">
                    <Image
                        src="/images/technician-in-high-visibility-safety-gear-inspects-9TQNA2H.webp"
                        alt="Ingenieros en campo"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30" />

                    <div className="relative z-10 mx-auto max-w-4xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl font-humanist">
                            &ldquo;El desarrollo no espera. Su proyecto merece una ejecución impecable.&rdquo;
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-200 md:text-xl leading-relaxed">
                            En EME, entendemos que la transformación territorial requiere más que técnica: requiere compromiso con las comunidades y el planeta. Ya sea una solución fotovoltaica o un plan de restauración ecológica, garantizamos estándares de excelencia que superan expectativas.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
