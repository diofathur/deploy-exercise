FROM training.btech.id/btacademy/node:8.10

WORKDIR /app
ADD . .
RUN npm install

EXPOSE 3000
CMD ["node", "index"]
