# Sequelize PUT and DELETE

## Instructions

Open the project folder in your code editor and familiarize yourself with the files provided.

The Sequelize model and most of the Express functionality has been provided for you.

In `routes/api-routes.js`, create two routes: one that processes a PUT request on `/api/reservations/:id` and another that processes a DELETE request on the same route. Using Sequelize, the server should update the specified row within table (and only that row) when it processes the PUT request, and should delete the specified row within the table (and only that row) when it processes the DELETE request.

Once you have the routes written, run `server.js` and load the page to test your site.

_Hint:_ You should not have to write any code outside of your `api-routes.js` file.

Stuck? Use the sequelize documentation or search the web to find the methods to update and delete data in your database: `http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-destroy`

## Challenge

Add routes for all request methods on `/api/waitinglist` and `/api/waitinglist/:id`. This functionality should be nearly identical to our reservations route, but reference the `WaitingList` model instead.

ULTRA CHALLENGE: Modify your `/api/reservations` DELETE request so that it moves a table from the WaitingList table in our database to the Reservations one. This will require you to use your `findAll`, `create`, and `destroy` sequelize methods!