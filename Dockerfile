FROM node:7.7-alpine

RUN apk --update add curl tar bash \
    && rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/app

ADD src .
RUN yarn

VOLUME /usr/src/app
WORKDIR /usr/src/app

CMD ["node", "index.js"]
