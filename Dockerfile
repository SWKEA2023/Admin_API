#Documentation for setting up Dockerfile for local and production
#https://www.tomray.dev/nestjs-docker-production

#Documentation for Dockerfile best practices
#https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

#Documentation for volumes --> Access filesystem from the container
#https://docs.docker.com/storage/volumes/

###################
# LOCAL DEVELOPMENT
###################
FROM node:14.16.0-alpine3.13
RUN addgroup -S app && adduser -S -G app-user app-user
USER app-user
WORKDIR /app
RUN mkdir /app
COPY package*.json .
RUN npm install

COPY . .
#Set the environment variable
ENV API_URL=Http://localhost:3001
EXPOSE 3000
CMD ["npm", "start"]

###################
# FOR PRODUCTION
###################

