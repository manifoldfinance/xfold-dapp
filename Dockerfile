FROM node:14-alpine

ADD package.json yarn.lock /tmp/
ADD .yarn-cache.tgz /

RUN cd /tmp && yarn
RUN mkdir -p /app && cd /app && ln -s /tmp/node_modules
WORKDIR /app

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm"]
CMD ["start"]