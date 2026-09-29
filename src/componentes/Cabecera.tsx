import { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import logo from "../assets/orbital-logo.webp";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";
import { PORTAL, SECCIONES } from "../datos/contenido";

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const [bajado, setBajado] = useState(false);

  // Al despegarse del hero la cabecera se opaca y aparece la línea de abajo.
  useEffect(() => {
    const alScrollear = () => setBajado(window.scrollY > 8);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors backdrop-blur-xl",
        bajado ? "border-border bg-[#0A0118]/92" : "border-transparent bg-[#0A0118]/70",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center gap-6 px-5">
        <a href="#inicio" aria-label="Banco Orbital, inicio" className="shrink-0">
          <img src={logo} alt="Banco Orbital" className="h-8 w-auto" />
        </a>

        <nav aria-label="Secciones" className="ml-auto hidden items-center gap-7 lg:flex">
          {SECCIONES.map((seccion) => (
            <a
              key={seccion.id}
              href={`#${seccion.id}`}
              className="border-b-2 border-transparent py-1.5 text-sm text-purple-100/85 transition hover:border-primary hover:text-white"
            >
              {seccion.nombre}
            </a>
          ))}
        </nav>

        {/* Los dos accesos al sistema, que es a lo que la gente viene. */}
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            asChild
            variant="ghost"
            className="hidden rounded-full text-purple-100 hover:bg-primary/10 hover:text-white sm:inline-flex"
          >
            <a href={PORTAL.registro}>Registrate</a>
          </Button>
          <Button asChild className="rounded-full">
            <a href={PORTAL.ingresar}>
              <LogIn className="h-4 w-4" />
              Home banking
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setAbierto((estaba) => !estaba)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar el menú" : "Abrir el menú"}
          className="-mr-2 rounded-lg p-2 text-purple-100 transition hover:bg-primary/10 lg:hidden"
        >
          {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menú de celular y tablet. El registro entra acá porque en pantallas
          angostas el botón del header no tiene lugar. */}
      <nav
        id="menu-movil"
        aria-label="Secciones"
        className={cn(
          "overflow-hidden border-t border-border bg-[#0A0118] transition-[max-height] duration-300 lg:hidden",
          abierto ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-5">
          {SECCIONES.map((seccion) => (
            <a
              key={seccion.id}
              href={`#${seccion.id}`}
              onClick={() => setAbierto(false)}
              className="block border-b border-border py-4 text-purple-100/90"
            >
              {seccion.nombre}
            </a>
          ))}
          <a
            href={PORTAL.registro}
            className="block py-4 font-semibold text-[#C084FC] sm:hidden"
          >
            Registrate
          </a>
        </div>
      </nav>
    </header>
  );
}
