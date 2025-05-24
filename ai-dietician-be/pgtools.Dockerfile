FROM postgres:15.0

WORKDIR /usr/src/app

COPY db-creation.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/db-creation.sh

CMD ["db-creation.sh"]