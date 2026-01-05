import { NextResponse } from "next/server"

export async function GET() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJNQ0LRLGaP44RS6sASGLHTgY"
  const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY

  if (!GOOGLE_API_KEY) {
    return NextResponse.json(
      { error: "Google API Key no configurada" },
      { status: 500 }
    )
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}&language=es`
    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== "OK") {
      return NextResponse.json(
        { 
          error: "Error al obtener reseñas", 
          details: data.status,
          message: data.error_message || "Error desconocido de Google Places API"
        },
        { status: 400 }
      )
    }

    if (!data.result.reviews || data.result.reviews.length === 0) {
      return NextResponse.json(
        { 
          error: "No hay reseñas disponibles",
          reviews: [],
          rating: data.result.rating || 0,
          totalRatings: data.result.user_ratings_total || 0
        },
        { status: 200 }
      )
    }

    const filteredReviews = data.result.reviews
      .filter((review: any) => review.rating >= 4)
      .sort((a: any, b: any) => (b.time || 0) - (a.time || 0))
      .slice(0, 20)
      .map((review: any, index: number) => ({
        id: review.time || index,
        name: review.author_name,
        rating: review.rating,
        comment: review.text,
        date: formatReviewDate(review.time),
        profilePhoto: review.profile_photo_url || null,
      }))

    return NextResponse.json({
      reviews: filteredReviews,
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
    })
  } catch (error) {
    return NextResponse.json(
      { 
        error: "Error al obtener reseñas",
        details: error instanceof Error ? error.message : "Error desconocido"
      },
      { status: 500 }
    )
  }
}

function formatReviewDate(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Hoy"
  if (diffDays === 1) return "Ayer"
  if (diffDays < 7) return `Hace ${diffDays} días`
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`
  return `Hace ${Math.floor(diffDays / 365)} años`
}

