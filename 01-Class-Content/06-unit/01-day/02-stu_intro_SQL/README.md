# SQL CREATE Table

## Instructions

Create a database called `projects_db`.

Create three tables called `customers`, `projects`, and `invoices`.

For the table customers...

* Create the column "company_name" which can take in a 50 character string and cannot be NULL
* Create the column "email" which can take in a 100 character string and cannot be NULL

For the table projects...

* Create the column "name" which can take in a 100 character string and cannot be NULL
* Create the column "company_name" which can take in a 50 character string and cannot be NULL
* Create the column "start_date" which can take in a date
* Create the column "due_date" which can take in a date

For the table invoices...

* Create the column "invoice_number" which can take in a integer and cannot be NULL
* Create the column "amount" which can take in an integer
* Create the column "paid" which can take in a boolean

## Challenge

Make the `amount` column in the `invoices` table take in a decimal value.

Add more rows to the `customers` table to more fully flesh out information that we might want to store about them. Use your discretion about what data types we might want to use.

Look into how you might go about creating a column that can hold a default value within it and how default values work when creating new rows.
