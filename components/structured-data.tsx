export function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Robin La Peluquería",
    description: "Peluquería profesional en Bogotá cerca de Unicentro. Especialistas en corte de cabello, coloración, tratamientos capilares y servicios de belleza. Ubicados en Cl. 118 #15-45, al lado del centro comercial Unicentro.",
    url: "https://robinlapeluqueria.vercel.app",
    telephone: "+573108757670",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cl. 118 #15-45",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.6944",
      longitude: "-74.0500",
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
    areaServed: [
      {
        "@type": "City",
        name: "Bogotá",
      },
      {
        "@type": "City",
        name: "Chapinero",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Peluquería",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corte de Cabello",
            description: "Cortes de cabello modernos y personalizados",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coloración",
            description: "Servicios de coloración y mechas profesionales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tratamientos Capilares",
            description: "Tratamientos para el cuidado y salud del cabello",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

