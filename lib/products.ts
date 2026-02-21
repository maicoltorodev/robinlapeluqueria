export interface Product {
    id: string
    name: string
    tagline: string
    price: number
    originalPrice?: number
    image: string
    category: string
    badge?: string
    description: string
    longDescription: string
    benefits: string[]
    ingredients: string[]
    howToUse: string[]
    volume: string
    rating: number
    reviews: number
}

export const products: Product[] = [
    {
        id: "serum-capilar-reparador",
        name: "Sérum Capilar Reparador",
        tagline: "Regeneración profunda en cada gota",
        price: 89900,
        originalPrice: 119900,
        image: "/productos/product_serum_capilar_1771634440485.png",
        category: "Tratamiento",
        badge: "Más Vendido",
        description: "Sérum concentrado con proteínas de seda y keratina que repara el cabello dañado desde adentro, dejándolo suave, brillante y manejable.",
        longDescription: "Nuestro Sérum Capilar Reparador es una fórmula avanzada desarrollada especialmente para cabello dañado por coloraciones, calor y tratamientos químicos. Con una concentración premium de proteínas de seda hidrolizada y keratina vegetal, penetra hasta la médula del cabello, sellando la cutícula y restaurando su estructura interna. Ideal para uso diario o como tratamiento intensivo semanal.",
        benefits: [
            "Repara puntas abiertas y cabello quebradizo",
            "Aporta brillo espejo al instante",
            "Reduce el frizz hasta un 95%",
            "Facilita el peinado y desenredo",
            "Protege del calor de herramientas de styling",
            "Resultados visibles desde la primera aplicación",
        ],
        ingredients: [
            "Keratina vegetal hidrolizada",
            "Proteínas de seda",
            "Aceite de argán BIO",
            "Pantenol (Pro-vitamina B5)",
            "Extracto de aguacate",
            "Vitamina E",
        ],
        howToUse: [
            "Aplica unas pocas gotas sobre el cabello húmedo o seco",
            "Distribuye uniformemente por el largo y puntas",
            "No enjuagar — dejar actuar",
            "Estiliza con secador o plancha normalmente",
            "Para tratamiento intensivo: aplica mayor cantidad, envuelve con toalla tibia 20 min y enjuaga",
        ],
        volume: "100 ml",
        rating: 4.9,
        reviews: 127,
    },
    {
        id: "mascarilla-nutritiva-intensiva",
        name: "Mascarilla Nutritiva Intensiva",
        tagline: "Nutrición máxima para cabello sediento",
        price: 72900,
        originalPrice: 89900,
        image: "/productos/product_mascarilla_nutritiva_1771634459209.png",
        category: "Hidratación",
        badge: "Nuevo",
        description: "Mascarilla de alta nutrición con mantequilla de karité y aceites botánicos que transforma el cabello seco y opaco en brillante y suave al tacto.",
        longDescription: "La Mascarilla Nutritiva Intensiva de Robin es un tratamiento de lujo en crema que devuelve vida y vitalidad al cabello más seco y castigado. Formulada con mantequilla de karité orgánica de máxima pureza, aceites botánicos prensados en frío y un complejo de aminoácidos esenciales, esta mascarilla nutre en profundidad, mejorando la elasticidad y suavidad del cabello de forma inmediata y duradera.",
        benefits: [
            "Hidratación profunda de larga duración",
            "Restaura la elasticidad del cabello",
            "Suaviza y doma el cabello rebelde",
            "Aporta un brillo natural y saludable",
            "Previene la rotura y el daño mecánico",
            "Apta para cabello teñido y tratado",
        ],
        ingredients: [
            "Mantequilla de karité orgánica",
            "Aceite de coco virgen",
            "Aceite de jojoba prensado en frío",
            "Complejo de aminoácidos esenciales",
            "Aloe vera BIO",
            "Extracto de proteína de trigo",
        ],
        howToUse: [
            "Aplica sobre cabello lavado y escurrido",
            "Distribuye de medios a puntas evitando la raíz",
            "Deja actuar mínimo 10 minutos",
            "Para mayor nutrición, usa calor (gorro térmico) 20-30 min",
            "Enjuaga abundantemente con agua tibia",
            "Úsala 1-2 veces por semana para mejores resultados",
        ],
        volume: "300 ml",
        rating: 4.8,
        reviews: 94,
    },
    {
        id: "aceite-argan-puro",
        name: "Aceite de Argán Puro",
        tagline: "El oro líquido para tu cabello",
        price: 65900,
        image: "/productos/product_aceite_argan_1771634476167.png",
        category: "Aceites",
        badge: "Premium",
        description: "Aceite 100% puro de argán marroquí, prensado en frío y sin aditivos. Nutre, brilla y controla el frizz de manera natural y sin residuo graso.",
        longDescription: "Extraído de las almendras del árbol de argán en las regiones del sur de Marruecos, nuestro aceite es prensado en frío y certificado puro al 100%, sin mezclas ni aditivos. Rico en ácidos grasos esenciales, vitamina E y antioxidantes, este 'oro líquido' es el secreto de belleza milenario que hidrata, protege y da brillo extraordinario al cabello. Su textura ultraligera no deja residuo graso y se absorbe al instante.",
        benefits: [
            "100% puro y libre de aditivos",
            "Absorción ultrarrápida sin residuo graso",
            "Controla el frizz y el encrespamiento",
            "Protege del daño térmico y UV",
            "Aumenta el brillo y suavidad",
            "Múltiples usos: cabello, piel y uñas",
        ],
        ingredients: [
            "Argania spinosa (Argán) Kernel Oil 100%",
            "Puro, sin conservantes ni fragancia añadida",
            "Certificado orgánico",
            "Prensado en frío",
        ],
        howToUse: [
            "Para el cabello: aplica 2-3 gotas en las palmas y distribuye",
            "Úsalo en cabello húmedo antes del secado como protector térmico",
            "O en cabello seco para dar brillo y controlar el frizz",
            "Para la piel: aplica unas gotas como sérum facial o corporal",
            "Para las uñas: masajea en cutículas y uñas para nutrirlas",
        ],
        volume: "50 ml",
        rating: 5.0,
        reviews: 203,
    },
    {
        id: "tonico-luminoso-capilar",
        name: "Tónico Luminoso Capilar",
        tagline: "Activa tu cabello desde la raíz",
        price: 58900,
        originalPrice: 74900,
        image: "/productos/product_tonico_luminoso_1771634648580.png",
        category: "Tratamiento",
        badge: "Oferta",
        description: "Tónico revitalizante con extractos botánicos y complejo vitamínico que estimula el cuero cabelludo, fortalece el folículo y activa el crecimiento.",
        longDescription: "El Tónico Luminoso Capilar es una solución de tratamiento capilar avanzada diseñada para revitalizar el cuero cabelludo y estimular el crecimiento del cabello. Su fórmula exclusiva combina extractos botánicos como el ginseng, la cafeína y el romero, con un complejo vitamínico de vitaminas B, C y E que nutren el folículo piloso desde la raíz. Ideal para cabellos con falta de densidad, caída excesiva o cuero cabelludo fatigado.",
        benefits: [
            "Estimula la circulación del cuero cabelludo",
            "Reduce la caída del cabello notablemente",
            "Fortalece el folículo piloso",
            "Aporta luminosidad y vitalidad",
            "Refresca y equilibra el cuero cabelludo",
            "Sin enjuague — fácil aplicación diaria",
        ],
        ingredients: [
            "Extracto de ginseng rojo coreano",
            "Cafeína estimulante micronizada",
            "Extracto de romero BIO",
            "Niacinamida (Vitamina B3)",
            "Biotina (Vitamina B7)",
            "Complejo vitamínico B5, C, E",
        ],
        howToUse: [
            "Aplica directamente sobre el cuero cabelludo limpio y seco",
            "Masajea con la yema de los dedos durante 2-3 minutos",
            "No enjuagar",
            "Usa mañana o noche según preferencia",
            "Para mejores resultados usa diariamente",
            "Complementa con mascarilla nutritiva semanalmente",
        ],
        volume: "150 ml",
        rating: 4.7,
        reviews: 68,
    },
    {
        id: "brillo-perfecto-spray",
        name: "Brillo Perfecto Spray",
        tagline: "Brillo instantáneo en segundos",
        price: 48900,
        image: "/productos/product_brillo_perfecto_1771634669014.png",
        category: "Acabado",
        badge: "Favorito",
        description: "Spray de brillo ultraligero con filtro UV y protección térmica que sella la cutícula y devuelve el efecto espejo al cabello opaco al instante.",
        longDescription: "El Brillo Perfecto Spray es el toque final que todo look capilar necesita. Esta delicada bruma ultraligera con partículas de luz y silicones volátiles crea un velo invisible sobre cada hebra que sella la cutícula, refleja la luz en múltiples ángulos y aporta ese efecto espejo que se ve en las pasarelas. Enriquecido con filtro UV SPF 15 y protección térmica hasta 230°C, cuida tu cabello mientras lo hace brillar espectacularmente.",
        benefits: [
            "Efecto brillo espejo instantáneo",
            "Fijación ultraligera sin apelmazar",
            "Protección UV SPF 15 para el cabello",
            "Escudo térmico hasta 230°C",
            "Sella y suaviza la cutícula capilar",
            "Apto para todo tipo de cabello",
        ],
        ingredients: [
            "Ciclometicona (silicona volátil ultraligera)",
            "Dimeticona líquida",
            "Filtro UV SPF 15",
            "Agente protector térmico",
            "Fragancia capilar de larga duración",
            "Vitamina E antioxidante",
        ],
        howToUse: [
            "Sacude bien el frasco antes de usar",
            "Aplica a 20-30 cm del cabello",
            "Pulveriza sobre el cabello seco ya peinado",
            "Úsalo como toque final de tu rutina de styling",
            "Puede aplicarse antes del calor como protector",
            "1-2 aplicaciones son suficientes para el efecto deseado",
        ],
        volume: "200 ml",
        rating: 4.8,
        reviews: 156,
    },
]

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id)
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price)
}
