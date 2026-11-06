# VIDEOGAMESSCZ PS4 HOST 14.00 — ZIP AUTOCONTENIDO

**Todo incluido**: interfaz zombie, motor Afterglow, GoldHEN, patchset 14.00 y dependencias JavaScript. No se redirige a hosts externos.

## Uso
1. Extraer el ZIP y subir **el contenido**, no la carpeta contenedora, a la raíz del repositorio de GitHub Pages.
2. Activar Settings > Pages > Deploy from a branch > main / root.
3. Abrir la URL de GitHub Pages en el navegador de la PS4 14.00 y pulsar **Lanzar GoldHEN**.
4. Payloads y FTP: «No disponible de momento».

El botón principal ejecuta el mismo flujo `start()` de `launch.js` del autor, preseleccionando GoldHEN y navegando a `jb.html?log=1&afterglow=run&mode=goldhen`. Se mantiene la comprobación de referrer del motor. No se ha probado físicamente en una PS4. No garantiza éxito: puede colgarse y requerir reinicio. No cierres el navegador si informa de handles no desactivados; sigue las advertencias del README original.

## Licencias y créditos
Motor Afterglow de well0nez/m0zz, bajo AGPL-3.0-or-later; archivos originales de licencia `LICENSE` y `LICENSE-raw13g` incluidos. Se conservan los créditos y notas técnicas de `TECHNICAL.md`. El código de terceros se redistribuye bajo sus condiciones originales.

Se conserva el motor sin modificar en `afterglow.js`, `jb.js`, `core.js`, `mem.js`, `int64.js`, `ps4_offsets.js` y los binarios originales. Solo se personalizan la portada y el título visual de `jb.html`.

**Nota:** Application Cache es una tecnología antigua y su comportamiento depende del navegador/servidor. En GitHub Pages hay que comprobar la carga de todos los archivos.
