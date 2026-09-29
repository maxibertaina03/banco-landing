import { Card, CardContent } from "../ui/card";
import { PRODUCTOS } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

export function Productos() {
  return (
    <Seccion id="productos">
      <EncabezadoDeSeccion
        etiqueta="Productos"
        titulo="Todo lo que necesitás, en una sola app"
        bajada="Nada de trámites ni sucursales: cada producto se abre, se usa y se controla desde el portal."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {PRODUCTOS.map(({ icono: Icono, titulo, texto }, i) => (
          // La demora escalonada hace que las tarjetas entren en cascada y no
          // todas de golpe. Se reinicia por fila para que no se acumule.
          <Revelar key={titulo} demora={(i % 4) * 70} className="h-full">
            <Card className="h-full gap-0 rounded-3xl border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40">
              <CardContent className="p-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-primary/10">
                  <Icono className="h-5 w-5 text-[#C084FC]" />
                </span>
                <h3 className="mt-4 text-base font-medium text-white">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-purple-200/65">{texto}</p>
              </CardContent>
            </Card>
          </Revelar>
        ))}
      </div>
    </Seccion>
  );
}
