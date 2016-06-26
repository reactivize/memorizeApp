# src:
# mainapp
#
#
FROM node:6.2.1

EXPOSE 3000
EXPOSE 5858

ENV APPROOT="/devsrc"

WORKDIR $APPROOT

RUN cd $APPROOT; npm install
CMD npm start