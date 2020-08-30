FROM node:12.14.0-alpine3.11

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install --only=prod

COPY ./dist ./dist
COPY ./database.sql ./

EXPOSE 3000

CMD ["npm","run","start:prod"]