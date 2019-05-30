FROM node:10-jessie-slim
WORKDIR /usr/app/streamUs
COPY app/ .
RUN apt-get update -y
RUN apt-get install git -y
CMD ["sh", "-c", "yarn install && yarn devel"]
