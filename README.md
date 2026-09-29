# banco-landing

La cara pública de Banco Orbital: lo que ve alguien que todavía no es cliente.
Se publica en `orbitalbank.com.ar`, y los dos accesos de arriba a la derecha
llevan al portal (`app.orbitalbank.com.ar`) a registrarse o a ingresar.

React + Vite + Tailwind v4, con los mismos componentes shadcn y los mismos
colores que el home banking, para que pasar de una a otro no se sienta como
cambiar de producto.

## Trabajar en ella

```bash
npm install
npm run dev      # http://localhost:5250
```

## Cómo está armada

```
src/
  datos/contenido.ts    todos los textos y datos, en un solo lugar
  componentes/          una sección por archivo
  ui/                   los componentes de shadcn que usa
  estilos/theme.css     los colores, copiados del portal
```

**Para cambiar un texto, agregar un producto o corregir un límite no hace falta
tocar JSX**: está todo en `datos/contenido.ts` y las secciones lo recorren.

| Sección | Qué muestra |
|---|---|
| `Hero` | El lema y los dos accesos, con la tarjeta Gold flotando |
| `Productos` | Las ocho cosas que el banco hace hoy |
| `Niveles` | Los cuatro niveles de crédito con su límite y beneficios |
| `Beneficios` | Por qué elegirlo, en seis frases |
| `ComoEmpezar` | Los tres pasos reales del alta |
| `Preguntas` | Seis dudas típicas, en un acordeón de shadcn |
| `Cierre` y `Pie` | Última invitación, links y el aviso legal |

## Detalles que conviene no romper

- **Los colores salen de `estilos/theme.css`, copiado de
  `banco-frontend/src/styles/theme.css`.** Si allá cambia un token, acá también:
  son dos apps distintas que tienen que verse como una.
- **Los componentes de `ui/` son copias del portal.** Así funciona shadcn: se
  copia, no se instala. Si arreglás algo en uno, fijate si el portal tiene el
  mismo problema.
- **La aparición al hacer scroll (`Revelar`) nunca esconde contenido si el
  JavaScript falla**: arranca visible y sólo se esconde cuando el efecto está
  realmente activo. No lo cambies por un `opacity-0` en el CSS.
- Los textos hablan de lo que el banco **hace de verdad**. Si el portal gana una
  función, esta página también se actualiza.
- El aviso del pie ("proyecto académico, no es una entidad financiera real") no
  se saca: la página imita a un banco y eso tiene que quedar claro.

## Publicarla

Corre en su propio contenedor (nginx con el `dist` adentro, sin Node). Desde el
droplet:

```bash
cd /opt/orbital/banco-infra
./scripts/deploy.sh landing
```

Eso trae los cambios, reconstruye la imagen y la levanta. El resto del banco no
se toca.
