export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Robin La Peluquería",
    description: "Donde el estilo encuentra la elegancia",
    url: "https://robinlapeluqueria.vercel.app",
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
    image: "https://robinlapeluqueria.vercel.app/imagenmetadata.jpg",
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

