export interface ServiceItem {
    title: string;
    description: string;
}

export interface Service {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    items: ServiceItem[];
    image: string;
    icon: string;
    color: string;
    bgColor: string;
}

export const services: Service[] = [
    {
        id: "energia",
        title: "Energía",
        slug: "energia",
        shortDescription: "Diseñamos e implementamos soluciones de energía limpia orientadas a la eficiencia y la transición energética.",
        fullDescription: "Diseñamos e implementamos soluciones de energía limpia orientadas a la eficiencia y la transición energética, contribuyendo a un futuro más sostenible para hogares, empresas y comunidades.",
        items: [
            {
                title: "Proyectos de energía solar fotovoltaica",
                description: "Soluciones individuales (hogares, instituciones, empresas) y parques solares a escala comunitaria o municipal."
            },
            {
                title: "Energías alternativas",
                description: "Desarrollo de iniciativas basadas en hidrógeno verde y azul, orientadas a la reducción de emisiones y la innovación en fuentes energéticas sostenibles."
            },
            {
                title: "Optimización energética",
                description: "Asesoría en gestión eficiente del consumo eléctrico para entidades públicas y privadas."
            }
        ],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
        icon: "/icons/energia-limpia-icon.svg",
        color: "text-amber-600",
        bgColor: "bg-amber-50 dark:bg-amber-900/10"
    },
    {
        id: "medio-ambiente",
        title: "Medio Ambiente",
        slug: "medio-ambiente",
        shortDescription: "Ejecutamos acciones y estrategias de conservación y restauración ecológica, integrando soluciones sostenibles al territorio.",
        fullDescription: "Ejecutamos acciones y estrategias de conservación y restauración ecológica, integrando soluciones sostenibles al territorio para el bienestar de las comunidades y la protección de los ecosistemas.",
        items: [
            {
                title: "Estufas ecoeficientes",
                description: "Instalación de estufas móviles y fijas para reducir el uso de leña y las emisiones de carbono."
            },
            {
                title: "Restauraciones y reforestaciones ecológicas",
                description: "Intervenciones en ecosistemas estratégicos, con participación comunitaria."
            },
            {
                title: "Pozos sépticos",
                description: "Implementación en zonas rurales como medida de protección del recurso hídrico."
            },
            {
                title: "Sistemas silvopastoriles sostenibles",
                description: "Mejora productiva y conservación ambiental integradas."
            },
            {
                title: "Educación y gobernanza ambiental",
                description: "Programas que fortalecen capacidades locales para la gestión del territorio y los recursos naturales."
            }
        ],
        image: "/images/project-images/estufa-topaga-boyaca.jpeg",
        icon: "/icons/service-1.svg",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/10"
    },
    {
        id: "educacion",
        title: "Educación",
        slug: "educacion",
        shortDescription: "Promovemos la innovación educativa mediante el uso de tecnologías digitales y estrategias de formación docente.",
        fullDescription: "Promovemos la innovación educativa mediante el uso de tecnologías digitales y estrategias de formación docente, transformando los entornos escolares y fortaleciendo las competencias del siglo XXI.",
        items: [
            {
                title: "Apropiación tecnológica",
                description: "Proyectos de fortalecimiento de competencias TIC en docentes y estudiantes."
            },
            {
                title: "Dotación tecnológica",
                description: "Computadores, tabletas, tableros interactivos y plataformas LMS en sedes educativas oficiales."
            },
            {
                title: "Contenidos educativos digitales",
                description: "Desarrollo con enfoque STEAM, educación ambiental y sostenibilidad."
            },
            {
                title: "Educación no formal",
                description: "Formación en uso de tecnologías, metodologías innovadoras y transformación digital educativa."
            }
        ],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        icon: "/icons/service-2.svg",
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/10"
    }
];
