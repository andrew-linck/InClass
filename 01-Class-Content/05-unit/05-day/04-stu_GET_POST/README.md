# Back-end GET and POST Routes

## Instructions

Open `server.js`. This contains just a barebones Express application and the first two table reservations.

Write a GET route at `/api/tables` that responds with all customers that currently have a table reserved.

Write a GET route at `/api/waitinglist` that responds with all customers on the waitlist.

Write a POST route at `/api/tables` that will add the posted customer to the table data. If there are already 5 tables reserved, it should add the customer to the waitlist instead.

There is no front-end for this application, so use Postman to test your API routes.

## Challenge

If you finish the above and still have time, work on modularizing your code by moving the routes and the seeded data into their own modules.

