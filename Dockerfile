FROM node:23.5-alpine

RUN apk add g++ make py3-pip
WORKDIR /app/

COPY ./package.json ./

RUN apk add --no-cache git
RUN npm install -g npm@9.7.2
RUN npm install -g node-gyp
RUN npm upgrade --save --legacy-peer-deps
RUN npm install

