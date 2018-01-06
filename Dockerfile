FROM node:8

WORKDIR /app

COPY . .

ENV NODE_ENV production

RUN npm install --only=production
RUN npm run build

CMD [ "npm", "run", "serve" ]
