# Sequelize GET and POST

## Instructions

Open the project folder in your code editor and familiarize yourself with the files provided.

The Sequelize model and most of the Express functionality has been provided for you.

In `routes/api-routes.js`, create a new route that processes a POST requests. 

Using Sequelize, the server should retrieve all data stored in the `Tables` table when it receives the GET request, and should create a new entry in the database when it receives a POST request.

Once you have the routes written, run `server.js` and use Postman to test your routes.

You should see a result of `"success": true` if you were able to successfully able to POST to the database.

_Hint:_ You should not have to write any code outside of your `api-routes.js` file.
_Hint:_ If `findAll()` is sequelize's way of finding data, what does `create` do?

## Challenge

Add an additional route to handle a GET request on `/api/reservations/:id`.  This should return only the table that matches the `id` provided in the URL parameter.

Modify your table to add validation to your data so you do not accept emails in the wrong format or blank data for any field.  The Sequelize documentation should be of great help with this.

<http://docs.sequelizejs.com/manual/tutorial/models-usage.html>
