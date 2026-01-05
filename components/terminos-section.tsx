"use client"

export function TerminosSection() {
  return (
    <section id="terminos" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Términos y Condiciones
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Aceptación de los Términos</h2>
              <p>
                Al utilizar los servicios de Robin La Peluquería, aceptas estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Servicios Ofrecidos</h2>
              <p>
                Robin La Peluquería ofrece servicios profesionales de estética y belleza capilar, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Cortes de cabello</li>
                <li>Coloración y tratamientos capilares</li>
                <li>Peinados y estilismo</li>
                <li>Tratamientos de cuidado capilar</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Reservas y Cancelaciones</h2>
              <p>
                Las reservas pueden realizarse a través de nuestros canales de comunicación oficiales. Para cancelaciones o modificaciones, te pedimos que nos avises con al menos 24 horas de anticipación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Precios y Pagos</h2>
              <p>
                Los precios de nuestros servicios están sujetos a cambios sin previo aviso. El pago se realiza al momento de recibir el servicio. Aceptamos efectivo y métodos de pago electrónico según disponibilidad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Responsabilidades del Cliente</h2>
              <p>
                El cliente se compromete a:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Proporcionar información precisa sobre su historial capilar y alergias</li>
                <li>Llegar puntualmente a su cita</li>
                <li>Comunicar cualquier incomodidad o reacción durante el servicio</li>
                <li>Respetar las instalaciones y al personal</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">6. Limitación de Responsabilidad</h2>
              <p>
                Robin La Peluquería no se hace responsable por reacciones alérgicas o efectos adversos si el cliente no ha informado previamente sobre alergias conocidas o condiciones médicas relevantes. Realizamos pruebas de alergia cuando es necesario, pero la responsabilidad final recae en el cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">7. Propiedad Intelectual</h2>
              <p>
                Todas las imágenes, textos, logotipos y materiales de marketing de Robin La Peluquería son propiedad exclusiva de la empresa y están protegidos por derechos de autor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">9. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos términos y condiciones, puedes contactarnos a través de:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>WhatsApp: +57 310 8757670</li>
                <li>Instagram: <a href="https://www.instagram.com/robinlapeluqueria/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">@robinlapeluqueria</a></li>
                <li>Facebook: <a href="https://web.facebook.com/robinlapeluqueria" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Robin La Peluquería</a></li>
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

