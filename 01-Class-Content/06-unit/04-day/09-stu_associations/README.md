# Sequelize Associations

## Instructions

You are being tasked by your manager to aggregate all of the projects potential new hires have submitted. However, when it comes to level of depth and familiarity of languages, your team is severely spread out. In fact, each member of your team are experts in completely different languages. Your task is to take all of the coding projects in the database and create an association between them and specific programming languages so that your team members know which ones to review.

In the `models` folder, add the necessary code to the provided models to associate them with one another. Remember, a coding project is only written in one language, and a programming language may be used in multiple projects.

Once you have the associations added, open `server.js` and add the code necessary to `findAll` programming languages and their associated code projects.

_Note_: Once your model is created, feel free to run `npm run seed` to add data to your database. Remember to check your `config.json` and confirm that your connection info is correct for your development server!

**Challenge:** 

Now that you've completed the association between the two models, how would you make it so that deleting a programming language removes all associated coding projects along with it?

Hint: Look into `onDelete: cascade`.
