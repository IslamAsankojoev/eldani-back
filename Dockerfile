FROM node:16
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY package*.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]