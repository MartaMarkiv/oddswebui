FROM node:14 as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package* ./
COPY ./public/ /usr/src/app/public/
RUN npm ci --silent

COPY ./src/ /usr/src/app/src/
RUN npm run build

FROM nginx:1.23

WORKDIR /app
COPY --from=builder /usr/src/app/build /app/web
COPY nginx/nginx.conf /etc/nginx/nginx.conf