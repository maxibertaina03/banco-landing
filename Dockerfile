# syntax=docker/dockerfile:1

# ── Compilación ───────────────────────────────────────────────────────────────
FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Dejar los archivos ya comprimidos al máximo, listos para servir.
#
# nginx comprime al vuelo en nivel 1 (rápido pero flojo) y lo rehace en cada
# request. Con gzip_static entrega estos .gz, comprimidos en nivel 9: pesan
# menos y el servidor no gasta CPU. En un droplet de 512 MB las dos cosas
# importan.
RUN find dist -type f \( -name '*.js' -o -name '*.css' -o -name '*.html' -o -name '*.svg' \) \
      -exec gzip -9 -k {} \;


# ── Runtime ───────────────────────────────────────────────────────────────────
# La imagen final no tiene Node: son archivos estáticos y los sirve nginx.
FROM nginx:alpine AS runtime

COPY nginx/estaticos.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=60s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/index.html || exit 1
