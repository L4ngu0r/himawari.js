##
#
# NAME             : languor/himawari.js
# VERSION          : 1.0
# DOCKER-VERSION   : 17.05.0-ce
# DESCRIPTION      : Himawari Satellite Imagery
# BUILD            : docker build -t languor/himawari.js .
# RUN              : docker run -d -v ~/yourpath:/earth --name himawari-sat languor/himawari.js
#
##


FROM node:slim

ENV HOME /usr/src/app

RUN apt-get update
RUN apt-get install imagemagick -y
RUN apt-get install graphicsmagick -y

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD . /usr/src/app/

RUN mkdir /earth
VOLUME /earth

RUN npm i

CMD ["node", "examples/bot.js"]