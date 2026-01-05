"use client"

export function CookiesSection() {
  return (
    <section id="cookies" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Política de Cookies
          </h1>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Uso de Cookies</h2>
              <p>
                En Robin La Peluquería, actualmente no utilizamos cookies propias en nuestro sitio web. Nuestro sitio funciona sin necesidad de almacenar cookies en tu dispositivo para su funcionamiento básico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Servicios de Terceros</h2>
              <p>
                Nuestro sitio web puede utilizar servicios de terceros que podrían establecer sus propias cookies. Estos servicios incluyen:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Servicios de análisis web para entender cómo los visitantes utilizan nuestro sitio</li>
                <li>Enlaces a redes sociales (Instagram, Facebook) que pueden usar cookies cuando interactúas con ellos</li>
              </ul>
              <p className="mt-4">
                No tenemos control directo sobre estas cookies de terceros. Te recomendamos revisar las políticas de privacidad de estos servicios para obtener más información sobre su uso de cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Gestión de Cookies</h2>
              <p>
                Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar o aceptar cookies, y eliminar las cookies existentes. Ten en cuenta que si desactivas las cookies, algunas funcionalidades de servicios de terceros pueden no estar disponibles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Actualizaciones</h2>
              <p>
                Si en el futuro decidimos implementar cookies propias en nuestro sitio web, actualizaremos esta política para reflejar esos cambios. Te recomendamos revisar esta página periódicamente para estar informado sobre cualquier actualización.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Contacto</h2>
              <p>
                Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos a través de:
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
