# Sequelize Create and Read

## Instructions

Using the provided files, use Sequelize to add data to our restaurant database. 

After you've added the create method, run `app.js` and confirm that your data was added successfully.

Once you've added some data, remove the create method and use `findAll` to display it in the terminal.

_Important:_ Remember to do your coding inside the `.then` function after the `db.sync()`. If you don't, Sequelize will try to run its SQL statements before it has connected to the database!

## Challenge

Read the [Sequelize Documentation](http://docs.sequelizejs.com/manual/tutorial/querying.html) and add a where statement to Sequelize's `findAll` query.
