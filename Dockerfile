FROM node:latest

WORKDIR app/express

COPY package.json ./package.json

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start"]
