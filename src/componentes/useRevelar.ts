import { useLayoutEffect, useRef, useState } from "react";

/**
 * Avisa cuando el elemento entra en pantalla, para la aparición de las
 * tarjetas al hacer scroll.
 *
 * Dos cuidados:
 *
 *  - `activo` arranca en false y se enciende en el efecto. Mientras tanto todo
 *    se dibuja visible, así que si el JavaScript no llega, o el navegador no
 *    tiene IntersectionObserver, la landing se ve completa igual en vez de
 *    quedar invisible para siempre.
 *  - El efecto es de layout (no el común) para que se aplique ANTES del primer
 *    pintado. Con `useEffect` el navegador alcanzaba a mostrar el contenido y
 *    enseguida lo escondía: se veía un parpadeo feo al cargar.
 */
export function useRevelar<T extends HTMLElement = HTMLDivElement>() {
  const referencia = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const [activo, setActivo] = useState(false);

  useLayoutEffect(() => {
    const elemento = referencia.current;
    if (!elemento || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    setActivo(true);

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisible(true);
        observador.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return { referencia, visible, activo };
}
