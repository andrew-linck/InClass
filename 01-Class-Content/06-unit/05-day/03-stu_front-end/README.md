# Front-End Implementation Activity

## Instructions

Open `app.js`. Inside the `postArticle` function, do the following in order:

* Store the user input from the HTML in an object called `article` which has the properties `title` and `body`.

* Make a POST request to `/api/articles`, passing the `article` object along as the body of the request. This will be received by our server, which will process the data and create a new entry in the database.

* Once a successful response is received, call `getArticles()` to retrieve all the articles in the database and trigger a new render to the DOM.

Once you have this working, remove `force: true` from the `sync` method in `server.js`. Having `force` set to `true` makes Sequelize drop our tables in the database and rebuild them, so any data we had stored there is lost. We want it on when we start the server to make sure our database is synced properly, but we want it off after we've finished our app so we don't lose all of our data every time we start the server.

## Challenge

Use the provided SQL seeds in `seeds.sql` to add a few authors to your database.

Add a dropdown to your HTML form that will display the authors. The value for each option should be the author's id from the database, and the text should be their name.

Add a function called `getAuthors` which makes a GET request to `/api/authors` and then renders the response data as the options in the dropdown you just created.

Modify the `postArticle` function so that the selected author id is added to the data being POSTed to the server.


## ULTRA CHALLENGE

Add a dropdown and a button with the text "Filter" above the articles display area.  The dropdown should be populated with the list of Authors as in the previous challenge section. When the filter button is clicked, only articles written by the selected author should be displayed. 

_Hint_: You'll need to add another function with a new GET request to make this work.