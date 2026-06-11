# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist/attendance-check/browser ./dist/attendance-check/browser

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist/attendance-check/browser", "-l", "3000"]
