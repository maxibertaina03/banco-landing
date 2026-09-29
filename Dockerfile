# syntax=docker/dockerfile:1

# ── Compilación ───────────────────────────────────────────────────────────────
FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# ── Runtime ───────────────────────────────────────────────────────────────────
# La imagen final no tiene Node: son archivos estáticos y los sirve nginx.
FROM nginx:alpine AS runtime

COPY nginx/estaticos.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=60s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/index.html || exit 1
