CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
  name VARCHAR(30) NOT NULL,
  full_time BOOLEAN NOT NULL,
  start_date DATE,
  extension INTEGER
);

INSERT INTO employees (name, full_time, start_date, extension)
VALUES ("Ahmed", true, "2015-03-17", 76);

SELECT * FROM employees;

INSERT INTO employees (name, full_time)
VALUES ("Susan", false);

-- ADD SOME DUPLICATE DATA --

INSERT INTO employees (name, full_time)
VALUES ("Susan", false);

-- DELETE THAT DATA --

DELETE FROM employees
WHERE name = 'Susan';