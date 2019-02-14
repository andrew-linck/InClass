# Blogger Back-End Routes

## Instructions

Open the `author-api-routes.js` file and add a GET RESTful route using the `findAll()` method. 

Create another GET RESTful route that retrieves data based on an `id` that matches an `id` passed in as a URL parameter. 

Finally, add a POST RESTful route for your Author model. Don't forget to include any articles associated with the author.

Open `article-api-routes.js` and do the same for your Article model.

Once you've added your routes, use Postman to test your routes and confirm that they are functioning as intended.

### Challenge

Add the PUT and DELETE routes for both the Article and Author models.

### ULTRA CHALLENGE

Add a route that will add a Article and an Author to our database simultaneously. The [Sequelize documentation](http://docs.sequelizejs.com/manual/tutorial/associations.html) on associations will be of great help with this.
