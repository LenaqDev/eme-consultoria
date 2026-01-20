"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/components/Button";
import { cn } from "@/shared/lib/utils";

const navLinks = [
    { name: "Inicio", href: "/#home" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/#services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="absolute top-0 z-50 w-full bg-transparent">
            <Container>
                <div className="flex h-30 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={pathname === "/projects" || pathname === "/about" || pathname === "/blog" ? "/Logo E.M.E..png" : "/Logo E.M.E.v2.png"}
                            alt="EME Consultorías Logo"
                            width={200}
                            height={10}
                            className=" w-[180px] object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isProjectsPage = pathname === "/projects" || pathname === "/about" || pathname === "/blog";
                            const linkColor = isProjectsPage ? "text-slate-800 hover:text-slate-600" : "text-white hover:text-white/80";
                            const activeColor = isProjectsPage ? "text-secondary font-bold" : "text-white font-bold";

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors",
                                        pathname === link.href ? activeColor : linkColor
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link
                            href="/#contact"
                            className={cn(
                                "text-sm font-medium transition-colors",
                                pathname === "/projects" || pathname === "/about" || pathname === "/blog" ? "text-slate-800 hover:text-slate-600" : "text-white hover:text-white/80"
                            )}
                        >
                            Contacto
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden p-2",
                            pathname === "/projects" || pathname === "/about" || pathname === "/blog" ? "text-slate-800" : "text-white"
                        )}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t bg-background">
                    <Container className="py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link href="/#contact" onClick={() => setIsOpen(false)}>
                                Contacto
                            </Link>
                        </Button>
                    </Container>
                </div>
            )}
        </header>
    );
}
