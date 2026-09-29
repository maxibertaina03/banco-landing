import { BENEFICIOS } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

export function Beneficios() {
  return (
    <Seccion id="beneficios">
      <EncabezadoDeSeccion etiqueta="Por qué Orbital" titulo="Un banco que no te hace perder tiempo" />

      <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFICIOS.map((beneficio, i) => (
          <Revelar key={beneficio.titulo} demora={(i % 3) * 70}>
            <div className="border-l-2 border-border py-6 pl-5">
              <h3 className="text-base font-medium text-white">{beneficio.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-purple-200/65">{beneficio.texto}</p>
            </div>
          </Revelar>
        ))}
      </div>
    </Seccion>
  );
}
