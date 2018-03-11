ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL info

FROM node:9.8.0
RUN npm i -g npm@5.7.1

WORKDIR /app

COPY . .

RUN npm install --only=production
RUN npm run build

CMD [ "npm", "run", "serve" ]
