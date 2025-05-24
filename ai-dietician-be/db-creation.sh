#!/bin/bash

echo "Waiting for PostgreSQL to be ready at $DB_HOST:$DB_PORT..."
until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$POSTGRES_USER"; do
 sleep 2
done

echo "Checking if database '$POSTGRES_DB' exists..."
DB_EXISTS=$(PGPASSWORD="$POSTGRES_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$POSTGRES_USER" -tAc "SELECT 1 FROM pg_database WHERE datname = '\"$POSTGRES_DB\"'")

if [[ "$DB_EXISTS" != "1" ]]; then
 echo "Database '$POSTGRES_DB' does not exist. Creating it now..."
 PGPASSWORD="$POSTGRES_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$POSTGRES_USER" -c "CREATE DATABASE \"$POSTGRES_DB\";"
else
 echo "Database '$POSTGRES_DB' already exists. Skipping creation."
fi

echo "Database setup complete"