import { Check } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { cn } from "../ui/utils";
import { ESTILO_NIVEL, NIVELES } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

export function Niveles() {
  return (
    <Seccion id="tarjetas" alterna>
      <EncabezadoDeSeccion
        etiqueta="Tarjetas de crédito"
        titulo="Cuatro niveles, uno para cada momento"
        bajada="El límite no lo pedís: lo define el banco según tu situación crediticia y tu saldo. A medida que crece tu relación con nosotros, subís de nivel."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {NIVELES.map((nivel, i) => {
          const estilo = ESTILO_NIVEL[nivel.nivel];
          return (
            <Revelar key={nivel.nivel} demora={(i % 4) * 70} className="h-full">
              <Card className="relative h-full gap-0 overflow-hidden rounded-3xl border-border bg-card p-6">
                {/* La franja con el color del plástico: es lo que hace que se
                    reconozcan de un vistazo. */}
                <span className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", estilo.franja)} />

                <CardContent className="p-0">
                  <Badge variant="outline" className={cn("rounded-full px-3 py-0.5", estilo.chip)}>
                    {nivel.nombre}
                  </Badge>

                  <p className="mt-4 text-2xl font-semibold text-white">{nivel.limite}</p>
                  <p className="text-sm text-muted-foreground">de límite</p>

                  <ul className="mt-5 grid gap-2.5">
                    {nivel.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start gap-2 text-sm text-purple-200/70">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Revelar>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Los niveles disponibles se calculan con tu situación en la Central de Deudores y el saldo de
        tus cuentas. Entrá al portal y fijate cuál te corresponde hoy.
      </p>
    </Seccion>
  );
}
