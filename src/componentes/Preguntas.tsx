import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { PREGUNTAS } from "../datos/contenido";
import { EncabezadoDeSeccion, Seccion } from "./piezas";

export function Preguntas() {
  return (
    <Seccion id="preguntas">
      <div className="mx-auto max-w-3xl">
        <EncabezadoDeSeccion etiqueta="Preguntas frecuentes" titulo="Lo que todos preguntan" />

        {/* `collapsible` para que se pueda cerrar la que está abierta: si no,
            una vez abierta la primera no hay forma de volver a cerrarla. */}
        <Accordion type="single" collapsible className="w-full">
          {PREGUNTAS.map(({ pregunta, respuesta }) => (
            <AccordionItem key={pregunta} value={pregunta} className="border-border">
              <AccordionTrigger className="text-left text-base text-white hover:no-underline">
                {pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-purple-200/70">
                {respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Seccion>
  );
}
