# Instructions

## Instructions

Make a new database called "programming_db" and switch into it for this activity

Create a table called "programming_languages" which includes a primary key named "id" which will automatically increment with each new row created, a string column called "languages," numeric column called "rating," and a boolean column called "mastered" which defaults to true.

Insert some data into the table and then modify the data using the id column.

## Challenge

A FOREIGN KEY is a key we can include in our table definition that associates one table with data in another table. Research how to use the FOREIGN KEY designator and create a new table called "code_projects" which has a primary key called "id", a string column called "name", and a foreign key for the language used, which links to the "programming_languages" table.

ULTRA CHALLENGE: Add some data to your new `code_projects` table. Research the concept of joins in SQL and see if you can SELECT data from multiple tables at once.
