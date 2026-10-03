import { Beneficios } from "./componentes/Beneficios";
import { Cabecera } from "./componentes/Cabecera";
import { Cierre } from "./componentes/Cierre";
import { ComoEmpezar } from "./componentes/ComoEmpezar";
import { Instalacion } from "./componentes/Instalacion";
import { Hero } from "./componentes/Hero";
import { Niveles } from "./componentes/Niveles";
import { Pie } from "./componentes/Pie";
import { Preguntas } from "./componentes/Preguntas";
import { Productos } from "./componentes/Productos";

export function App() {
  return (
    <>
      {/* Primer tabulador: saltear la navegación. */}
      <a
        href="#productos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100] focus:rounded-br-xl focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <Cabecera />
      <main>
        <Hero />
        <Productos />
        <Niveles />
        <Beneficios />
        <Instalacion />
        <ComoEmpezar />
        <Preguntas />
        <Cierre />
      </main>
      <Pie />
    </>
  );
}
