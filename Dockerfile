FROM    mhart/alpine-node

WORKDIR /app
ADD     ./app    /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package*.json /app/

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

# Bundle app source
#COPY ./app /app/

EXPOSE 8080 3020 9229
CMD [ "npm", "run", "start" ]
