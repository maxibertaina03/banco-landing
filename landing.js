// Lo mínimo para que la landing se sienta viva. Sin dependencias: son 60
// líneas que el navegador entiende tal cual, no hace falta compilar nada.

(function () {
  "use strict";

  // ── Menú en celular ────────────────────────────────────────────────────────
  var boton = document.getElementById("menu-boton");
  var navegacion = document.getElementById("navegacion");

  if (boton && navegacion) {
    boton.addEventListener("click", function () {
      var abierto = navegacion.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
      boton.setAttribute("aria-label", abierto ? "Cerrar el menú" : "Abrir el menú");
    });

    // Al tocar un link el menú se cierra solo: si no, tapa la sección a la que
    // justo acabás de saltar.
    navegacion.addEventListener("click", function (evento) {
      if (evento.target.tagName === "A") {
        navegacion.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ── El header se despega del hero al bajar ─────────────────────────────────
  var cabecera = document.getElementById("cabecera");

  if (cabecera) {
    var marcarScroll = function () {
      cabecera.classList.toggle("esta-abajo", window.scrollY > 8);
    };
    marcarScroll();
    window.addEventListener("scroll", marcarScroll, { passive: true });
  }

  // ── Aparición de las tarjetas al llegar ────────────────────────────────────
  // Con IntersectionObserver, que no cuesta nada. Si el navegador no lo tiene
  // (o alguien pidió menos movimiento), se muestran todas de entrada: la
  // landing nunca queda en blanco por culpa del efecto.
  var aRevelar = document.querySelectorAll(".revelar");
  var prefiereQuieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefiereQuieto) {
    aRevelar.forEach(function (elemento) {
      elemento.classList.add("visible");
    });
  } else {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    aRevelar.forEach(function (elemento) {
      observador.observe(elemento);
    });
  }

  // ── El año del pie ─────────────────────────────────────────────────────────
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
