import { useCallback, useRef, useState } from "react";
import { CreditCard } from "lucide-react";
import { ESTILO_NIVEL } from "../datos/contenido";
import { cn } from "../ui/utils";

/** Cuánto se inclina siguiendo al puntero, en grados. */
const INCLINACION_MAXIMA = 9;

/**
 * La tarjeta que flota en el hero, en su versión Black.
 *
 * Es el mismo plástico que ve el cliente adentro del portal (Plastico en
 * features/tarjetas): quien entra a la landing reconoce después lo que tiene
 * en su cuenta. Acá además está viva.
 *
 * El efecto holográfico son tres capas sobre el negro, y ninguna es un dibujo:
 *
 *  1. Dos manchas de color muy desenfocadas que giran a velocidades distintas
 *     (19s y 23s). Donde se cruzan aparecen tonos que ninguna de las dos tiene
 *     —así se comporta el nácar— y como los tiempos son primos entre sí, el
 *     ciclo combinado tarda mucho en repetirse y no se nota el bucle.
 *  2. Un brillo especular que cruza cada tanto, como al girar la tarjeta bajo
 *     una lámpara.
 *  3. Con el mouse, una inclinación en 3D y un reflejo que sigue al puntero.
 *
 * Las dos primeras usan `plus-lighter`: suman luz en vez de taparla, que es lo
 * que hace la diferencia entre "parece iluminada" y "tiene una calcomanía".
 *
 * Nada de esto es esencial. Con `prefers-reduced-motion` todo queda quieto y
 * la tarjeta se ve igual de bien, sólo que sin moverse.
 */
export function Plastico() {
  const tarjeta = useRef<HTMLDivElement>(null);
  const [puntero, setPuntero] = useState<{ x: number; y: number } | null>(null);

  const seguirPuntero = useCallback((evento: React.PointerEvent<HTMLDivElement>) => {
    // Sólo con mouse: en una pantalla táctil el dedo tapa justo lo que mueve.
    if (evento.pointerType !== "mouse") return;
    const caja = tarjeta.current?.getBoundingClientRect();
    if (!caja) return;
    setPuntero({
      x: (evento.clientX - caja.left) / caja.width,
      y: (evento.clientY - caja.top) / caja.height,
    });
  }, []);

  const soltar = useCallback(() => setPuntero(null), []);

  // Centrado = 0.5. El eje Y invertido para que la tarjeta se incline *hacia*
  // el puntero y no al revés.
  const giroY = puntero ? (puntero.x - 0.5) * 2 * INCLINACION_MAXIMA : 0;
  const giroX = puntero ? (0.5 - puntero.y) * 2 * INCLINACION_MAXIMA : 0;

  return (
    <div aria-hidden className="relative w-full max-w-[380px] [perspective:1200px]">
      {/* La segunda tarjeta, apenas asomando: da profundidad sin robar
          atención. */}
      <div
        className={cn("absolute inset-0 rounded-3xl bg-gradient-to-br opacity-55", ESTILO_NIVEL.standard.plastico)}
        style={{ transform: "rotate(6deg) translate(18px, 26px)" }}
      />

      {/* El `flotar` va en este contenedor y la inclinación en el de adentro:
          si compartieran elemento, la animación le pisaría el transform al
          puntero y la tarjeta pegaría saltos. */}
      <div className="relative -rotate-6 motion-safe:animate-[flotar_7s_ease-in-out_infinite]">
        <div
          ref={tarjeta}
          onPointerMove={seguirPuntero}
          onPointerLeave={soltar}
          className={cn(
            "relative flex aspect-[1.586] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-white shadow-2xl shadow-black/60 transition-transform duration-300 ease-out [transform-style:preserve-3d]",
            ESTILO_NIVEL.black.plastico,
          )}
          style={{ transform: `rotateX(${giroX}deg) rotateY(${giroY}deg)` }}
        >
          {/* ── El holograma ─────────────────────────────────────────────── */}
          {/* Cada capa va recortada con una máscara: el color no cubre la
              tarjeta, se concentra en una zona y el resto queda negro. Es la
              diferencia entre una Black con un reflejo encima y un degradado
              de colores. La primera versión no llevaba máscara y la tarjeta
              terminaba verdosa de punta a punta.

              La máscara se queda quieta mientras el color gira por debajo: así
              la mancha parece luz pasando por una superficie fija, en vez de
              una figura que se pasea. */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              // Una banda diagonal angosta, no una esquina entera: el reflejo
              // es una cinta que cruza el plástico y el resto queda negro.
              maskImage:
                "linear-gradient(112deg, transparent 14%, rgba(0,0,0,0.55) 30%, #000 42%, rgba(0,0,0,0.55) 54%, transparent 70%)",
              WebkitMaskImage:
                "linear-gradient(112deg, transparent 14%, rgba(0,0,0,0.55) 30%, #000 42%, rgba(0,0,0,0.55) 54%, transparent 70%)",
            }}
          >
            <div
              className="absolute -inset-1/2 opacity-55 blur-2xl [mix-blend-mode:plus-lighter] motion-safe:animate-[irisar-a_19s_linear_infinite]"
              style={{
                background: [
                  "radial-gradient(46% 58% at 22% 28%, rgba(34,211,238,0.95) 0%, transparent 62%)",
                  "radial-gradient(52% 62% at 68% 22%, rgba(139,92,246,0.9) 0%, transparent 64%)",
                  "radial-gradient(44% 54% at 52% 78%, rgba(236,72,153,0.7) 0%, transparent 62%)",
                  "radial-gradient(48% 58% at 86% 68%, rgba(52,211,153,0.55) 0%, transparent 64%)",
                ].join(", "),
                filter: "saturate(1.45)",
              }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{
              // La segunda, más abierta y en otro ángulo: donde se cruza con
              // la primera aparecen los tonos que ninguna de las dos tiene.
              maskImage:
                "linear-gradient(58deg, transparent 30%, rgba(0,0,0,0.5) 48%, #000 62%, transparent 84%)",
              WebkitMaskImage:
                "linear-gradient(58deg, transparent 30%, rgba(0,0,0,0.5) 48%, #000 62%, transparent 84%)",
            }}
          >
            <div
              className="absolute -inset-1/2 opacity-35 blur-2xl [mix-blend-mode:plus-lighter] motion-safe:animate-[irisar-b_23s_linear_infinite]"
              style={{
                background: [
                  "radial-gradient(50% 60% at 72% 34%, rgba(99,102,241,0.85) 0%, transparent 64%)",
                  "radial-gradient(44% 56% at 30% 62%, rgba(6,182,212,0.75) 0%, transparent 62%)",
                  "radial-gradient(40% 50% at 60% 84%, rgba(217,70,239,0.55) 0%, transparent 60%)",
                ].join(", "),
                filter: "saturate(1.45)",
              }}
            />
          </div>

          {/* El brillo especular que cruza cada tanto. */}
          <div
            className="pointer-events-none absolute inset-y-[-30%] left-0 w-1/3 opacity-0 [mix-blend-mode:plus-lighter] motion-safe:animate-[destellar_9s_ease-in-out_infinite] motion-safe:opacity-100"
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.1) 65%, transparent 100%)",
            }}
          />

          {/* El reflejo que sigue al mouse. Aparece sólo cuando hay puntero
              encima. */}
          {puntero && (
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 [mix-blend-mode:plus-lighter]"
              style={{
                background: `radial-gradient(42% 60% at ${puntero.x * 100}% ${puntero.y * 100}%, rgba(255,255,255,0.22) 0%, transparent 70%)`,
              }}
            />
          )}

          {/* El canto del plástico: un hilo de luz arriba y sombra abajo. Es
              lo que la separa de un rectángulo de color. */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />

          {/* ── El contenido, por encima de todas las capas ───────────────── */}
          <div className="relative flex items-start justify-between">
            <span className="text-sm text-white/85">
              Orbital Crédito · <span className="font-medium">Black</span>
            </span>
            <CreditCard className="h-5 w-5 text-white/70" />
          </div>

          {/* Mismo tratamiento que en el portal: más chico y sin tracking en
              pantallas angostas, donde el número no entraba de un renglón. */}
          <p className="relative font-mono text-base tracking-[0.12em] whitespace-nowrap sm:text-lg sm:tracking-[0.18em]">
            **** **** **** 4297
          </p>

          <div className="relative flex items-end justify-between text-xs">
            <div>
              <p className="text-white/60">Titular</p>
              <p className="uppercase">Nombre Apellido</p>
            </div>
            <div className="text-right">
              <p className="text-white/60">Vence</p>
              <p>09/31</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
