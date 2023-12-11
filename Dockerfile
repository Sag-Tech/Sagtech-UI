FROM node:20-alpine as builder
RUN mkdir -p /usr/src/fe
WORKDIR /usr/src/fe
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build-storybook

FROM nginx:alpine as production
COPY --from=builder /usr/src/fe/storybook-static /usr/share/nginx/storybook-static
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
