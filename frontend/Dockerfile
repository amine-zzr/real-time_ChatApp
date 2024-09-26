# Frontend Dockerfile for React
FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

# Set Node options to use legacy OpenSSL provider to fix crypto issues
ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]
