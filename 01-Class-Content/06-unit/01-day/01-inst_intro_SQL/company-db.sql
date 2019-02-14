CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
  name VARCHAR(30) NOT NULL,
  full_time BOOLEAN NOT NULL,
  start_date DATE,
  extension INTEGER
);
