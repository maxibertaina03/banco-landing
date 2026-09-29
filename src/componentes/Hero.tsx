import { Button } from "../ui/button";
import { PORTAL } from "../datos/contenido";
import { Etiqueta } from "./piezas";
import { Plastico } from "./Plastico";

const SELLOS = ["Sin costo de apertura", "100 % online", "Caja en dólares incluida"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28"
      style={{
        backgroundImage:
          "radial-gradient(90% 120% at 15% 0%, rgba(124,58,237,0.28) 0%, transparent 55%), radial-gradient(70% 90% at 90% 20%, rgba(168,85,247,0.18) 0%, transparent 60%)",
      }}
    >
      {/* La marca es una órbita, así que el fondo también. Decorativo y
          recortado por el overflow de la sección. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[620, 900, 1250].map((tamano, i) => (
          <span
            key={tamano}
            className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: tamano,
              height: tamano,
              borderColor: `rgba(196, 181, 253, ${0.12 - i * 0.035})`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* En celular la tarjeta va arriba: entra primero por los ojos. */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Etiqueta>Banca digital</Etiqueta>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu dinero,{" "}
            <span className="bg-gradient-to-r from-[#C084FC] via-[#E9D5FF] to-primary bg-clip-text text-transparent">
              siempre en órbita
            </span>
            .
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-lg text-purple-200/75 lg:mx-0">
            Abrí tu cuenta en minutos y manejá todo desde un solo lugar: pesos y dólares,
            transferencias a cualquier banco, tarjetas, préstamos e inversiones.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href={PORTAL.registro}>Abrí tu cuenta</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 bg-transparent px-8 text-purple-100 hover:bg-primary/10 hover:text-white"
            >
              <a href={PORTAL.ingresar}>Ya soy cliente</a>
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {SELLOS.map((sello) => (
              <li key={sello} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {sello}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Plastico />
        </div>
      </div>
    </section>
  );
}
