export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Robin La Peluquería",
    description: "En Robin La Peluquería transformamos tu cabello en una obra de arte. Cada corte, cada color, cada estilo es creado con pasión y dedicación para que brilles con tu mejor versión.",
    url: "https://robinlapeluqueria.com",
    telephone: "+573108757670",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cl. 118 #15-45",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    image: "https://robinlapeluqueria.com/imagenmetadata.jpg",
    sameAs: [
      "https://www.instagram.com/robinlapeluqueria/",
      "https://web.facebook.com/robinlapeluqueria",
    ],
    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

