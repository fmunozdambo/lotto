#Node Image
FROM node:14
WORKDIR /usr/src/app
#Variables to connect with the db
ENV PGUSER=postgres
ENV PGHOST=postgres
ENV PGPASSWORD=1234
ENV PGDATABASE=LottoBynder
ENV PGPORT=5432
#
COPY package*.json ./
COPY . .
RUN npm install
RUN npm install -g nodemon
RUN npm install -g pg
EXPOSE 8080
CMD [ "nodemon","app.js" ]
#CMD [ "node", "app.js" ]
