const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all authors
  app.get('/api/authors', function(req, res) {
    db.Author.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // GET route for retrieving a single specified author
  app.get('/api/authors/:id', function(req, res) {
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for adding new authors
  app.post('/api/authors', function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating authors
  app.put('/api/authors/:id', function(req, res) {
    db.Author.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting authors
  app.delete('/api/authors/:id', function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
