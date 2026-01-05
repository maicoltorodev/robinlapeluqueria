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
  title: "ROBIN | La Peluquería",
  description:
    "Donde la creatividad minimalista se encuentra con la innovación audaz. Experimenta el arte capilar vanguardista en un espacio contemporáneo impactante.",
  generator: "Next.js",
  keywords: ["peluquería", "salón de belleza", "corte de cabello", "coloración", "tratamientos capilares", "Robin La Peluquería"],
  authors: [{ name: "Robin La Peluquería" }],
  creator: "Robin La Peluquería",
  publisher: "Robin La Peluquería",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://robinlapeluqueria.com",
    siteName: "ROBIN La Peluquería",
    title: "ROBIN | La Peluquería - Estética y Belleza",
    description:
      "Donde la creatividad minimalista se encuentra con la innovación audaz. Experimenta el arte capilar vanguardista en un espacio contemporáneo impactante.",
    images: [
      {
        url: "/imagenmetadata.jpg",
        width: 1200,
        height: 630,
        alt: "ROBIN La Peluquería - Estética y Belleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROBIN | La Peluquería - Estética y Belleza",
    description:
      "Donde la creatividad minimalista se encuentra con la innovación audaz. Experimenta el arte capilar vanguardista.",
    images: ["/imagenmetadata.jpg"],
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
