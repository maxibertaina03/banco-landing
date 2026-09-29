# banco-landing

La cara pública de Banco Orbital: lo que ve alguien que todavía no es cliente.
Se publica en `orbitalbank.com.ar`, y los dos botones de arriba a la derecha
llevan al portal (`app.orbitalbank.com.ar`) a registrarse o a ingresar.

## Sin build, a propósito

Son tres archivos —`index.html`, `estilos.css`, `landing.js`— y la carpeta
`assets/`. Nada de npm, nada de compilar: nginx los sirve tal cual.

Es una decisión, no una limitación. El droplet tiene 512 MB y el portal ya se
lleva toda la memoria cuando compila; una landing que no necesita build se
publica con un `git pull` y no puede romper el deploy del banco. Los colores y
la tipografía salen de los mismos valores que el portal
(`banco-frontend/src/styles/theme.css`), así que pasar de una a otro no se nota.

## Verla mientras la editás

```bash
python3 -m http.server 5250
# http://localhost:5250
```

Cualquier servidor estático sirve; no hay rutas ni API.

## Publicarla

Vive clonada en el droplet, al lado de los otros repos, y nginx la sirve desde
ahí. Para publicar un cambio:

```bash
cd /opt/orbital/banco-landing && git pull
```

Listo: no hay imagen que reconstruir ni contenedor que reiniciar. El
`deploy.sh` de `banco-infra` también la actualiza junto con todo lo demás.

## Cómo está armada

| Sección | Qué muestra |
|---|---|
| Hero | El lema y los dos accesos, con la tarjeta Gold flotando |
| Productos | Las ocho cosas que el banco hace hoy, una tarjeta cada una |
| Tarjetas | Los cuatro niveles de crédito con su límite y beneficios |
| Beneficios | Por qué elegirlo, en seis frases |
| Cómo empezar | Los tres pasos reales del alta |
| Preguntas | Seis dudas típicas, en acordeón nativo (`<details>`) |
| Cierre y pie | Última invitación, links y el aviso legal |

Detalles que conviene no romper al editar:

- **El efecto de aparición depende de la clase `con-js`**, que pone un script
  inline en el `<head>`. Si se saca, y el JavaScript falla, media landing queda
  invisible. Con `con-js` el contenido siempre se ve.
- **El botón "Registrate" del header desaparece abajo de 620 px** porque no
  entra al lado del de Home banking; ahí aparece dentro del menú. Si movés uno,
  acordate del otro.
- Los textos hablan de lo que el banco **hace de verdad**. Si se agrega un
  producto al portal, esta página también se actualiza.
- El aviso del pie ("proyecto académico, no es una entidad financiera real") no
  se saca: la página imita a un banco y eso tiene que quedar claro.
