import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import { PRUEBA, PORTAL } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

/**
 * "Probalo sin ser cliente": el QR del modo prueba.
 *
 * El QR es un PNG estático y no un componente que lo dibuje. Dos razones: la
 * landing no tiene ninguna librería de QR y no vale la pena sumarla para un
 * código que nunca cambia, y así el mismo archivo sirve para la presentación y
 * para imprimir. Un solo artefacto que mantener.
 */
export function Prueba() {
  return (
    <Seccion id="prueba">
      <EncabezadoDeSeccion etiqueta={PRUEBA.etiqueta} titulo={PRUEBA.titulo} bajada={PRUEBA.bajada} />

      <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-[auto_1fr]">
        <Revelar className="mx-auto">
          {/* Fondo claro alrededor del código: muchas cámaras pierden el
              contraste cuando el QR va al ras de un fondo oscuro. */}
          <div className="rounded-3xl border border-border bg-card p-5">
            <img
              src="/qr-demo.png"
              alt="Código QR para entrar al modo prueba de Banco Orbital"
              width={224}
              height={224}
              className="h-56 w-56"
              loading="lazy"
            />
          </div>
        </Revelar>

        <Revelar demora={80}>
          <ul className="grid gap-3">
            {PRUEBA.puntos.map((punto) => (
              <li key={punto} className="flex items-start gap-3 text-sm text-purple-200/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-[#C084FC]" />
                </span>
                {punto}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href={`${PORTAL.ingresar.replace(/\/ingresar$/, "")}/demo`}>
                Entrar al modo prueba
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">{PRUEBA.pie}</p>
          </div>
        </Revelar>
      </div>
    </Seccion>
  );
}
