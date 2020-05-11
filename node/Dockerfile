FROM ubuntu:18.04
RUN apt update
RUN apt install -y \
    nodejs \
    npm \
    sqlite3
RUN npm install -g \
    nodemon
RUN npm install \
    mysql \
    express \
    body-parser \
    multer \
    pug
COPY src/ /var/www/html
EXPOSE 3000
WORKDIR /var/www/html
ENTRYPOINT [ "nodemon", "server.js" ]