import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://robinlapeluqueria.vercel.app"),
  title: "Peluquería en Bogotá cerca de Unicentro | Robin La Peluquería - Salón de Belleza",
  description: "Peluquería profesional en Bogotá cerca de Unicentro. Corte de cabello, coloración, tratamientos capilares y servicios de belleza. Ubicados en Cl. 118 #15-45. Reserva tu cita ahora.",
  generator: "Next.js",
  keywords: [
    "peluquería bogotá",
    "peluquería unicentro",
    "peluquería cerca de unicentro",
    "salón de belleza bogotá",
    "peluquería chapinero",
    "corte de cabello bogotá",
    "coloración cabello bogotá",
    "tratamientos capilares bogotá",
    "peluquería profesional bogotá",
    "salón de belleza unicentro",
    "peluquería norte bogotá",
    "Robin La Peluquería",
    "Robin la peluqueria",
    "peluquería cl 118",
    "mejor peluquería bogotá",
    "peluquería de moda bogotá",
    "estilista bogotá",
    "salón peluquería bogotá",
  ],
  authors: [{ name: "Robin La Peluquería" }],
  creator: "Robin La Peluquería",
  publisher: "Robin La Peluquería",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://robinlapeluqueria.vercel.app",
    siteName: "Robin La Peluquería - Peluquería en Bogotá",
    title: "Peluquería en Bogotá cerca de Unicentro | Robin La Peluquería",
    description: "Peluquería profesional en Bogotá cerca de Unicentro. Corte de cabello, coloración, tratamientos capilares y servicios de belleza. Ubicados en Cl. 118 #15-45.",
    images: [
      {
        url: "https://robinlapeluqueria.vercel.app/imagenmetadata.jpg",
        width: 1200,
        height: 630,
        alt: "Robin La Peluquería - Peluquería profesional en Bogotá cerca de Unicentro",
        type: "image/jpeg",
        secureUrl: "https://robinlapeluqueria.vercel.app/imagenmetadata.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peluquería en Bogotá cerca de Unicentro | Robin La Peluquería",
    description: "Peluquería profesional en Bogotá cerca de Unicentro. Corte de cabello, coloración y tratamientos capilares.",
    images: ["https://robinlapeluqueria.vercel.app/imagenmetadata.jpg"],
    creator: "@robinlapeluqueria",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=yes",
    "geo.region": "CO-DC",
    "geo.placename": "Bogotá",
    "geo.position": "4.6944;-74.0500",
    "ICBM": "4.6944, -74.0500",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
