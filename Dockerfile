FROM    mhart/alpine-node

RUN     npm install -g http-server

WORKDIR /www
ADD     ./www    /www

EXPOSE  8080

CMD ["http-server", "--cors", "-p8080", "/www"]
