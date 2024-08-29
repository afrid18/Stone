FROM node:22-alpine

WORKDIR /app 

COPY . . 

COPY package*.json .

RUN npm install

EXPOSE 5173

CMD [ "npm","run","dev", "--", "--host","--port", "5173"]


