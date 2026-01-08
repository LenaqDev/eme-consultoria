import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/shared/components/Container";

export function Footer() {
    return (
        <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Image
                    src="/images/footer1-bg-shape.png"
                    alt="Footer Background Shape"
                    fill
                    className="object-cover"
                />
            </div>
            <Container className="relative z-10 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image
                                src="/Logo-E.M.E.blanco.png"
                                alt="EME Consultorías Logo"
                                width={150}
                                height={150}
                                className="w-[150px] object-contain"
                            />
                        </Link>
                        <p className="text-sm text-secondary-foreground max-w-xs mb-6">
                            Transformando territorios a través de la formulación, diseño y ejecución de proyectos sostenibles en energía, medio ambiente y educación.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Menú</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <li><Link href="/#about" className="hover:text-white-500 transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/#services" className="hover:text-white-500 transition-colors">Servicios</Link></li>
                            <li><Link href="/projects" className="hover:text-white-500 transition-colors">Proyectos</Link></li>
                            <li><Link href="/blog" className="hover:text-white-500 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <li><Link href="#" className="hover:text-white-500 transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-white-500 transition-colors">Política de Privacidad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
                        <ul className="space-y-3 text-sm text-muted-white">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Colombia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>info@emeconsultorias.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+57 601 123 4567</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-secondary-foreground flex justify-between items-center flex-col md:flex-row">
                    <p>&copy; {new Date().getFullYear()} EME Consultorías y Asesorías S.A.S.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-accent transition-colors">
                            Desarrollado by Lenaq
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
