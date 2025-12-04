FROM node:22-alpine3.19
WORKDIR /Assignments01
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8688
CMD [ "npm","run","dev", "--", "--host",  "--port",  "8688"]