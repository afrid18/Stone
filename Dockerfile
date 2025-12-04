FROM node:24-slim

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm"]

CMD ["run", "dev"]
