FROM node:23.5-alpine

WORKDIR /app/

COPY ./package.json ./
RUN npm install

