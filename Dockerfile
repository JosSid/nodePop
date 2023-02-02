FROM node:16-buster-slim

WORKDIR /code
COPY . /code
RUN apt update && \
    apt upgrade -y && \
    apt install -y build-essential && \
    npm install  

EXPOSE 3000

CMD [ "npm", "start" ]
