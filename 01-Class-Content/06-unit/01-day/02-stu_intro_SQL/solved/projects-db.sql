-- Drops the projects_db if it exists currently --
DROP DATABASE IF EXISTS projects_db;
-- Creates the "projects_db" database --
CREATE DATABASE projects_db;

-- Makes it so all of the following code will affect projects_db --
USE projects_db;

-- Creates the table "customers" within projects_db --
CREATE TABLE customers (
  -- Makes a string column called "food" which cannot contain null --
  company_name VARCHAR(50) NOT NULL,
  -- Makes an string column called "email" --
  email VARCHAR(100) NOT NULL
);

CREATE TABLE projects (
  name VARCHAR(100) NOT NULL,
  company_name VARCHAR(50) NOT NULL,
  start_date DATE,
  due_date DATE
);

CREATE TABLE invoices (
  invoice_number INTEGER NOT NULL,
  amount INTEGER,
  paid BOOLEAN
);
