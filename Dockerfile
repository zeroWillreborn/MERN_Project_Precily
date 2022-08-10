FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_URL = "mongodb+srv://adk:cwvofypvqVhGmqWM@cluster0.gcfywfe.mongodb.net/?retryWrites=true&w=majority"
ENV NODE_ENV='production'

EXPOSE 8000

CMD ["npm" ,"run", "docker-build-webapp"]