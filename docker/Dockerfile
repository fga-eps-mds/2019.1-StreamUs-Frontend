FROM node:10-jessie-slim
WORKDIR /usr/app/streamUs
COPY app/ .
RUN apt-get update -y
RUN apt-get install git -y
RUN npm install
CMD ["npm", "run", "start-web"]
