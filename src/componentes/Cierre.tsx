import { Button } from "../ui/button";
import { PORTAL } from "../datos/contenido";

export function Cierre() {
  return (
    <section
      className="border-t border-border py-20 sm:py-24"
      style={{
        backgroundImage:
          "radial-gradient(70% 140% at 50% 100%, rgba(124,58,237,0.3) 0%, transparent 60%)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">¿Empezamos?</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-purple-200/75">
          Abrí tu cuenta hoy y operá desde donde estés.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={PORTAL.registro}>Abrí tu cuenta</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/40 bg-transparent px-8 text-purple-100 hover:bg-primary/10 hover:text-white"
          >
            <a href={PORTAL.ingresar}>Entrar al home banking</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
