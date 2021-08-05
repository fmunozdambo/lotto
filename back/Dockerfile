#Node Image
FROM node:14.15.0
#Variables to connect with the db
ENV PGUSER=postgres
ENV PGHOST=db
ENV PGPASSWORD=1234
ENV PGDATABASE=LottoBynder
ENV PGPORT=5432
#
RUN ["mkdir", "/install"]
ADD ["./package.json", "/install"]
WORKDIR /install
RUN npm install
RUN npm install -g nodemon
ENV NODE_PATH=/install/node_modules

WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app
EXPOSE 8080
CMD [ "nodemon","app.js" ]
# CMD [ "node", "app.js" ]
