FROM node:6-alpine

RUN apk --update add g++ python make
RUN npm install -g nodemon \
 && npm install -g npm

COPY . /workspace
WORKDIR /workspace

RUN npm install 
RUN npm run build

EXPOSE 8080

#ENTRYPOINT ["/bin/sh"]
ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["start"]
