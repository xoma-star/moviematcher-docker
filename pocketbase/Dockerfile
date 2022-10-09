FROM alpine:3.12

RUN apk update && apk add curl wget unzip
RUN addgroup -S pocketbase && adduser -S pocketbase -G pocketbase
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.7.9/pocketbase_0.7.9_linux_amd64.zip -O '/tmp/pocketbase.zip'
RUN unzip /tmp/pocketbase.zip -d /usr/local/bin/
RUN rm /tmp/pocketbase.zip


RUN mkdir /pb_data
RUN chown pocketbase:pocketbase /usr/local/bin/pocketbase
RUN chown pocketbase:pocketbase /pb_data
RUN chmod 710 /usr/local/bin/pocketbase



VOLUME /pb_data
USER pocketbase
EXPOSE 8090

ENTRYPOINT ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb_data"]