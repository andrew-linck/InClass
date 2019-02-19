-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  language VARCHAR(20),
  rating INTEGER,
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT true,
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO programming_languages (language, rating)
VALUES ("HTML", 95);

INSERT INTO programming_languages (language, rating)
VALUES ("JavaScript", 99);

INSERT INTO programming_languages (language, rating)
VALUES ("JQuery", 98);

INSERT INTO programming_languages (language, rating)
VALUES ("MySQL", 70);


-- CHALLENGE --

CREATE TABLE code_projects (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(20),
  languageId INTEGER,
  -- Makes languageId a FOREIGN KEY --
  -- Tells SQL that languageId refers to the "id" column in the table "programming_languages" --
  FOREIGN KEY (languageId)
    REFERENCES programming_languages(id),
  PRIMARY KEY (id)
);

INSERT INTO code_projects (name, languageId)
VALUES ("Website Building", 1);

INSERT INTO code_projects (name, languageId)
VALUES ("NodeJS Back-End", 2);

INSERT INTO code_projects (name, languageId)
VALUES ("Browser Game", 2);

INSERT INTO code_projects (name, languageId)
VALUES ("Data Persistence", 4);

-- This query gives us information pulled from two different tables --
-- It displays only the project name, project due date, and customer email columns --
-- This is done via a concept called a JOIN --
-- SQL combines the data from both the projects and customers tables --
-- It does so by matching where the company_name field is the same in both tables --
-- It is best practice when working with multiple tables in a SQL statement to specify which table a column belongs to --
-- We can do so by using the below dot notation in the format <table>.<column> --
SELECT
  code_projects.name, 
  programming_languages.language 
FROM
  code_projects LEFT JOIN programming_languages 
  on code_projects.languageId = programming_languages.id
WHERE 
  programming_languages.language = 'JavaScript';