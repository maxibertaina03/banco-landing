import logo from "../assets/orbital-logo.webp";
import { PORTAL } from "../datos/contenido";

const COLUMNAS = [
  {
    titulo: "Productos",
    links: [
      { texto: "Cuentas", href: "#productos" },
      { texto: "Tarjetas", href: "#tarjetas" },
      { texto: "Préstamos", href: "#productos" },
      { texto: "Plazos fijos", href: "#productos" },
    ],
  },
  {
    titulo: "Banco",
    links: [
      { texto: "Beneficios", href: "#beneficios" },
      { texto: "Cómo empezar", href: "#como-empezar" },
      { texto: "Preguntas frecuentes", href: "#preguntas" },
    ],
  },
  {
    titulo: "Acceso",
    links: [
      { texto: "Home banking", href: PORTAL.ingresar },
      { texto: "Registrate", href: PORTAL.registro },
    ],
  },
];

export function Pie() {
  return (
    <footer className="border-t border-border bg-[#070111] pb-8 pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-9 px-5 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <img src={logo} alt="Banco Orbital" className="h-7 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">Tu dinero, siempre en órbita.</p>
        </div>

        {COLUMNAS.map((columna) => (
          <nav key={columna.titulo} aria-label={columna.titulo}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {columna.titulo}
            </h3>
            {columna.links.map((link) => (
              <a
                key={link.texto}
                href={link.href}
                className="block py-1 text-sm text-purple-200/75 transition hover:text-[#C084FC]"
              >
                {link.texto}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-11 w-full max-w-6xl px-5">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Banco Orbital.</p>
          {/* El aviso no se saca: la página imita a un banco y eso tiene que
              quedar claro. */}
          <p className="max-w-2xl">
            Proyecto académico. Banco Orbital no es una entidad financiera real y no capta fondos del
            público.
          </p>
        </div>
      </div>
    </footer>
  );
}
