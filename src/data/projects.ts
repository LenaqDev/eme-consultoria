export interface Project {
    id: number;
    location: string;
    title: string;
    status: string;
    progress: string;
    category?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        location: "Fresno, Tolima",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES COMO MEDIDA DE CONSERVACIÓN AMBIENTAL",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/cocina-fresno.jpeg"
    },
    {
        id: 2,
        location: "Cauca",
        title: "SISTEMA INTEGRADO TECNICO EDUCATIVO COMO HERRAMIENTA PARA EL USO Y APROPIACION DE LOS RECURSOS DIDÁCTICOS TIC EN INSTITUCIONES EDUCATIVAS DEL DEPARTAMENTO DEL CAUCA",
        status: "Finalizado",
        progress: "100%",
        category: "Educación",
        image: "/images/project-images/educacion.png"
    },

    {
        id: 3,
        location: "Acevedo, Huila",
        title: "CONSTRUCCIÓN CUBIERTA POLIDEPORTIVO INSTITUCIÓN EDUCATIVA LA VICTORIA SEDE LA UNIÓN",
        status: "Finalizado",
        progress: "100%",
        category: "Infraestructura",
        image: "/images/project-images/cubierta2.jpeg"
    },
    {
        id: 4,
        location: "Campamento, Antioquia",
        title: "DOTACIÓN DE ESTUFAS ECOEFICIENTES PARA FAMILIAS EN ZONAS RURALES DEL MUNICIPIO DE CAMPAMENTO ANTIOQUIA",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/estufa-campamento-antioquiav2.jpeg"
    },
    {
        id: 5,
        location: "Chinchiná, Caldas",
        title: "IMPLEMENTACIÓN DE ACCIONES DE RESTAURACIÓN Y GOBERNANZA AMBIENTAL",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/restauracion.jpg"
    },
    {
        id: 5,
        location: "Tópaga, Boyacá",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES PARA FAMILIAS DE LA ZONA RURAL COMO MEDIDA DE CONSERVACIÓN AMBIENTAL EN EL MUNICIPIO DE TÓPAGA DEPARTAMENTO DE BOYACÁ",
        status: "En Ejecución",
        progress: "En Ejecución",
        category: "Medio Ambiente",
        image: "/images/project-images/estufa-topaga-boyaca.jpeg"
    },
    {
        id: 6,
        location: "Algeciras, Huila",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES COMO MEDIDA DE CONSERVACIÓN AMBIENTAL",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/cocina-ecologica.jpeg"
    },
    {
        id: 7,
        location: "Palestina, Huila",
        title: "IMPLEMENTACIÓN ESTUFAS ECOEFICIENTES PARA FAMILIAS DE LA ZONA RURAL COMO MEDIDA DE CONSERVACIÓN AMBIENTAL EN EL MUNICIPIO DE PALESTINA DEPARTAMENTO DEL HUILA",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/cocina-palestina.jpeg"
    },
    {
        id: 8,
        location: "Acevedo, Huila",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES COMO MEDIDA DE CONSERVACIÓN AMBIENTAL",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/estufa-ecologica2.jpeg"
    },


    {
        id: 9,
        location: "Chinchiná, Caldas",
        title: "IMPLEMENTACIÓN DE ACCIONES DE RESTAURACIÓN ACTIVA Y CONSERVACIÓN EN AREAS DECLARADAS DE IMPORTANCIA ESTRATEGICA PARA LA CONSERVACIÓN DEL RECURSO HIDRICO",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/restauracion.jpg"
    },

    {
        id: 10,
        location: "Puerto Guzmán, Putumayo",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES PARA FAMILIAS DE LA ZONA RURAL COMO MEDIDA DE CONSERVACIÓN AMBIENTAL EN EL MUNICIPIO DE PUERTO GUZMÁN, PUTUMAYO",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/estufa-ecologica2.jpeg"
    },
    {
        id: 11,
        location: "Acevedo, Huila",
        title: "DOTACION DE ESTUFAS ECOEFICIENTES PARA FAMILIAS EN ZONAS RURALES DEL MUNICIPIO DE ACEVEDO, DEPARTAMENTO DEL HUILA",
        status: "Finalizado",
        progress: "100%",
        category: "Medio Ambiente",
        image: "/images/project-images/cocina-ecologica.jpeg"
    },
    
    {
        id: 12,
        location: "Chinchiná",
        title: "IMPLEMENTACIÓN DE POZOS SÉPTICOS PARA LA CONSERVACIÓN PROTECCIÓN Y PRESERVACIÓN DEL SUELO Y LOS RECURSOS HÍDRICOS EN LA ZONA RURAL DEL MUNICIPIO DE CHINCHINÁ",
        status: "Finalizado",
        progress: "100%",
        category: "Agua y Saneamiento",
        image: "/images/project-images/pozo-septico.jpg"
    },
    
    {
        id: 13,
        location: "Isnos, Huila",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES PARA FAMILIAS DE LA ZONA RURAL COMO MEDIDA DE CONSERVACIÓN AMBIENTAL EN EL MUNICIPIO DE ISNOS, DEPARTAMENTO DEL HUILA",
        status: "En Ejecución",
        progress: "En Ejecución",
        category: "Medio Ambiente",
        image: "/images/project-images/estufa-ecologica2.jpeg"
    },
    {
        id: 14,
        location: "San Pedro de Cartago, Nariño",
        title: "IMPLEMENTACIÓN DE ESTUFAS ECOEFICIENTES PARA FAMILIAS DE LA ZONA RURAL COMO MEDIDA DE CONSERVACIÓN AMBIENTAL EN EL MUNICIPIO SAN PEDRO DE CARTAGO, DEPARTAMENTO DE NARIÑO",
        status: "En Ejecución",
        progress: "En Ejecución",
        category: "Medio Ambiente",
        image: "/images/project-images/cocina-ecologica.jpeg"
    }
];
