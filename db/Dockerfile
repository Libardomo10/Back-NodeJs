FROM mysql:5.7

ENV MYSQL_DATABASE Db_locations
ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_USER mysql
ENV MYSQL_PASSWORD root
ENV DATABASE_HOST db

EXPOSE 3306

COPY ./sql-scripts /docker-entrypoint-initdb.d/