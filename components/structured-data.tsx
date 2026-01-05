export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Robin La Peluquería",
    description: "Donde la creatividad minimalista se encuentra con la innovación audaz. Experimenta el arte capilar vanguardista en un espacio contemporáneo impactante.",
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

