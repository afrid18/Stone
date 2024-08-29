FROM node:slim
WORKDIR /myapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8086
CMD ["npm", "run", "dev","--", "--host", "--port", "8086"]
