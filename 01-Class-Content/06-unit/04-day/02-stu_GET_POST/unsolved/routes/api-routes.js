// Import in our db models
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API Requests for /api/reservations
  // Below code controls what happens when a request is made to /api/reservations

  // GET Request
  // Responds with all the currently booked reservations
  app.get('/api/reservations', function(req, res) {
    db.Reservation.findAll({}).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.post('/api/reservations', function(req, res) {
    db.Reservation.create(req.body).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.get('/api/reservations/:id', function(req, res) {
    db.Reservation.find({
      where: {id: req.params.id}
    }).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

}
