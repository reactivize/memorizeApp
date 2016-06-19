# src:
# mainapp
#
#
FROM node:6.2.1

EXPOSE 3000
EXPOSE 5858


WORKDIR /appdev

RUN cd /appdev; npm install
CMD npm start