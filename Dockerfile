FROM node:4-onbuild

#install pm2 to run node.js
RUN npm install pm2 -g

#Prepare app dir
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

#Install dependencies
WORKDIR /usr/src/app
RUN npm install


#Build the app
RUN npm run build

#Expose app port
EXPOSE 9000

#Start app
CMD ["pm2-docker","server"]
