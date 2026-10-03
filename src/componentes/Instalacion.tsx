import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { INSTALACION, PORTAL } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

/**
 * "Llevala en el teléfono".
 *
 * Acá no hay botón de instalar, y no es un olvido: una app web se instala desde
 * su propio dominio, y el portal vive en otro. Lo que sí podemos hacer es
 * explicar los dos toques y mandar a la gente ahí, donde el botón aparece solo.
 */
export function Instalacion() {
  return (
    <Seccion id="app" alterna>
      <EncabezadoDeSeccion
        etiqueta="En tu teléfono"
        titulo="Llevate el banco en el bolsillo"
        bajada="Orbital se instala como una app más, sin pasar por ninguna tienda y sin ocupar lugar."
      />

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {INSTALACION.map((guia, i) => (
          <Revelar key={guia.sistema} demora={i * 80} className="h-full">
            <div className="h-full rounded-3xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 text-base font-medium text-white">
                <Smartphone className="h-4 w-4 text-[#C084FC]" />
                {guia.sistema}
              </p>
              <ol className="mt-4 grid gap-3">
                {guia.pasos.map((paso, n) => (
                  <li key={paso} className="flex gap-3 text-sm text-purple-200/75">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs text-[#C084FC]">
                      {n + 1}
                    </span>
                    {paso}
                  </li>
                ))}
              </ol>
            </div>
          </Revelar>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg" className="rounded-full px-8">
          <a href={PORTAL.ingresar}>
            Abrir el home banking
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          La opción de instalar aparece ahí, no en esta página.
        </p>
      </div>
    </Seccion>
  );
}
