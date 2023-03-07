FROM node:16-alpine3.16
COPY server.js .

## Runtime ##
RUN node server.js
