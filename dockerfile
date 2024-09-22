 FROM node:slim
WORKDIR /documents/triplebond/utilities
COPY . /documents/triplebond/utilities
RUN npm install
EXPOSE 3000
CMD node calculator_server.js
