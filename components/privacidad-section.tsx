"use client"

export function PrivacidadSection() {
  return (
    <section id="privacidad" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Política de Privacidad
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Información que Recopilamos</h2>
              <p>
                En Robin La Peluquería, recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Reservas una cita a través de nuestros canales de comunicación</li>
                <li>Te comunicas con nosotros por WhatsApp o redes sociales</li>
                <li>Visitas nuestro establecimiento y proporcionas información personal</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Uso de la Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Gestionar y confirmar tus reservas</li>
                <li>Comunicarnos contigo sobre nuestros servicios</li>
                <li>Mejorar la calidad de nuestros servicios</li>
                <li>Enviarte información relevante sobre promociones y novedades (con tu consentimiento)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Protección de Datos</h2>
              <p>
                Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Compartir Información</h2>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Tus Derechos</h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">6. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, puedes contactarnos a través de:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>WhatsApp: +57 310 8757670</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border mt-12">
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

