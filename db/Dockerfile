# Postgres Image
FROM postgres
ENV POSTGRES_PASSWORD 1234
ENV POSTGRES_DB LottoBynder
COPY bynder.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
