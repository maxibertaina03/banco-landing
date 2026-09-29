import { CreditCard } from "lucide-react";
import { ESTILO_NIVEL } from "../datos/contenido";
import { cn } from "../ui/utils";

/**
 * La tarjeta que flota en el hero.
 *
 * Es el mismo plástico que ve el cliente adentro del portal (Plastico en
 * features/tarjetas), en su versión Gold: quien entra a la landing reconoce
 * después lo que tiene en su cuenta.
 */
export function Plastico() {
  return (
    <div aria-hidden className="relative w-full max-w-[380px]">
      {/* La segunda tarjeta, apenas asomando: da profundidad sin robar
          atención. */}
      <div
        className={cn("absolute inset-0 rounded-3xl bg-gradient-to-br opacity-55", ESTILO_NIVEL.standard.plastico)}
        style={{ transform: "rotate(6deg) translate(18px, 26px)" }}
      />

      <div
        className={cn(
          "relative flex aspect-[1.586] -rotate-6 flex-col justify-between rounded-3xl bg-gradient-to-br p-6 text-white shadow-2xl shadow-black/60 motion-safe:animate-[flotar_7s_ease-in-out_infinite]",
          ESTILO_NIVEL.gold.plastico,
        )}
      >
        <div className="flex items-start justify-between">
          <span className="text-sm text-white/85">
            Orbital Crédito · <span className="font-medium">Gold</span>
          </span>
          <CreditCard className="h-5 w-5 text-white/70" />
        </div>

        {/* Mismo tratamiento que en el portal: más chico y sin tracking en
            pantallas angostas, donde el número no entraba de un renglón. */}
        <p className="font-mono text-base tracking-[0.12em] whitespace-nowrap sm:text-lg sm:tracking-[0.18em]">
          **** **** **** 4297
        </p>

        <div className="flex items-end justify-between text-xs">
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
  );
}
