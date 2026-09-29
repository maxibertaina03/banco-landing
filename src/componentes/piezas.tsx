// Piezas que se repiten en varias secciones.

import type { ReactNode } from "react";
import { cn } from "../ui/utils";
import { useRevelar } from "./useRevelar";

/** El rótulo chiquito en violeta que encabeza cada sección. */
export function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{children}</p>
  );
}

export function Seccion({
  id,
  alterna = false,
  className,
  children,
}: {
  id?: string;
  alterna?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24", alterna && "border-y border-border bg-[#12042099]", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function EncabezadoDeSeccion({
  etiqueta,
  titulo,
  bajada,
}: {
  etiqueta: string;
  titulo: string;
  bajada?: string;
}) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center">
      <Etiqueta>{etiqueta}</Etiqueta>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {titulo}
      </h2>
      {bajada && <p className="mt-4 text-base text-purple-200/70 sm:text-lg">{bajada}</p>}
    </header>
  );
}

/**
 * Envuelve algo para que aparezca cuando llega a la pantalla.
 *
 * Si el efecto no está activo (sin JavaScript, sin IntersectionObserver) el
 * contenido se dibuja visible: nunca se pierde nada por culpa de la animación.
 * Y con "menos movimiento" activado en el sistema, `motion-safe` apaga la
 * transición sola.
 */
export function Revelar({
  children,
  demora = 0,
  className,
}: {
  children: ReactNode;
  demora?: number;
  className?: string;
}) {
  const { referencia, visible, activo } = useRevelar();

  return (
    <div
      ref={referencia}
      style={{ transitionDelay: `${demora}ms` }}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-500",
        activo && !visible && "motion-safe:translate-y-4 motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
