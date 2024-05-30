import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, Instagram, MessageCircle, FolderClosed, NotebookPen, HandHelping, Github, AppWindow, Gamepad2, Megaphone } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://github.com/MartiPJ",
        
    },
    {
        id: 3,
        logo: <MessageCircle size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id:4,
        logo:<Github size={30} strokeWidth={1} />,
        src:"#!",
    }
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Hand",
        icon: <HandHelping size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <FolderClosed size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Megaphone size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "C++",
        subtitle: "Proyectos",
        description: "He colaborado con equipos en la eloboración de proyectos hechos en c++.",
        
    },
    {
        id: 2,
        title: "Python",
        subtitle: "Juegos",
        description: "He desarollado juegon simples, como serpietes y escaleras,",
        
    },
    {
        id: 3,
        title: "Java",
        subtitle: "Aplicaciones",
        description: "He desarollado varias apliaciones en Java, desde un CRUD, hasta apliciones de estructura de datos como la implemetancion de árboles.",
        
    },
    {
        id: 4,
        title: "Minecraft",
        subtitle: "Servidores",
        description: "Me gusta mucho gestionar servidores de minecraft para la versión de java, me encargo de gestionar cada servidor de manera que el usuario pueda estar satisfecho.",
        
    },
    {
        id: 5,
        title: "Actividades extracurriculares",
        subtitle: "Música",
        description: "Aparte de dedicarme a la informatica y sistemas, también me gusta desarrollar mi inteligencia músical a travéz del violín, el cual me apasiona mucho ejecutarlo",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 80,
        text: "Habilidades comunicativas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 90,
        text: "Toma de decisiones",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 100,
        text: "Motivacón",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 85,
        text: "Resolución de problemas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Aplicaciones de escritorio",
        description: "Desarrollo de aplicaciones para optimizar los diferentes procesos ya sea tareas personales o del trabajo.",
    },
    {
        icon: <AppWindow />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Gamepad2 />,
        title: "Servidores de Minecraft",
        description: "Diseño y prgramación de servidores,mod,plugins para tu mundo de minecraft",
    }

];

export const dataPortfolio = [
    {
        id: 1,
        title: "MoonMaps",
        descripcion:"Una página web para gestionar las diferentus rutas de tranposte urbano en Xela",
        image: "/mmaps logo.jpg",
        urlGithub: "#!",
        
    },
    {
        id: 2,
        title: "Backend hotel",
        descripcion:"Desarrolo de las reservaciones y habitaciones para un proyecto universitario",
        image: "/backenHotel.jpg",
        urlGithub: "#!",
        
    },
    {
        id: 3,
        title: "FriesDatabase",
        descripcion:"Conexión de una base de datos para una aplicacion móvil de gestión de papas fritas con flutter",
        image: "/database.png",
        urlGithub: "#!",
        
    },
    {
        id: 4,
        title: "Minecraft",
        descripcion:"Gestión de un servidor de minecraft con mod utilizando forge para la implementación de mods",
        image: "/server.png",
        urlGithub: "#!",
        
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];