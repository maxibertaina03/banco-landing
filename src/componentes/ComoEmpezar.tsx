import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { PASOS, PORTAL } from "../datos/contenido";
import { EncabezadoDeSeccion, Revelar, Seccion } from "./piezas";

export function ComoEmpezar() {
  return (
    <Seccion id="como-empezar" alterna>
      <EncabezadoDeSeccion etiqueta="Cómo empezar" titulo="Tu cuenta, en tres pasos" />

      <ol className="grid gap-5 md:grid-cols-3">
        {PASOS.map((paso, i) => (
          <li key={paso.titulo}>
            <Revelar demora={i * 90} className="h-full">
              <Card className="h-full gap-0 rounded-3xl border-border bg-card p-7">
                <CardContent className="p-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-white">{paso.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-purple-200/65">{paso.texto}</p>
                </CardContent>
              </Card>
            </Revelar>
          </li>
        ))}
      </ol>

      <div className="mt-11 text-center">
        <Button asChild size="lg" className="rounded-full px-8">
          <a href={PORTAL.registro}>Crear mi cuenta</a>
        </Button>
      </div>
    </Seccion>
  );
}
