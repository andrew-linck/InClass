// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // Add GET and POST routes for Authors, including their posts
  app.get("/authors", function(req, res) {
    db.Author.findAll({
      include: [db.Article]
    }).then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json(error);
    });
  });

  app.get("/:id", function(req, res) {
    db.Author.findAll({
      where: {id: req.params.id},
    }).then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json(error);
    });
  });

  app.post("/authors", function(req, res) {
    db.Author.create(req.body).then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json(error);
    });
  });

};
