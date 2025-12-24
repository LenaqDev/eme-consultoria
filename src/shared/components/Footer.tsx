import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/shared/components/Container";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Leaf className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-700">
                                EME Consultorías
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 max-w-xs mb-6 dark:text-slate-400">
                            Transformando territorios a través de la formulación, diseño y ejecución de proyectos sostenibles en energía, medio ambiente y educación.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Menú</h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Galería</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Legal</h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Contacto</h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Colombia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>contacto@eme.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+57 300 123 4567</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500 flex justify-between items-center flex-col md:flex-row dark:border-slate-800 dark:text-slate-400">
                    <p>&copy; {new Date().getFullYear()} EME Consultorías y Asesorías S.A.S.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
