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

  // POST Request
  // Adds a new reservation to our database
  // Responds with success: true or false if successful
  app.post('/api/reservations', function(req, res) {
    db.Reservation.create(req.body).then(function(rows) {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    });
  });

  // API Requests for /api/reservations/:id
  // Below code controls what happens when a request is made to /api/reservations/:id

  // GET Request
  // Responds with just the requested reservation at the referenced id
  app.get('/api/reservations/:id', function(req, res) {
    db.Reservation.find({ where: { id: req.params.id }})
      .then(function(data){
        res.json(data);
      }).catch(function(error) {
        res.json({ error: error });
      });
  });

  // PUT Request
  // Replaces the reservation at the referenced id with the one provided
  // Responds with success: true or false if successful
  app.put('/api/reservations/:id', function(req, res) {
    db.Reservation.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE Request
  // Removes the reservation at the referenced id
  // If there are reservations on the waiting list, moves them to the reservations list
  // Responds with success: true or false if successful

  app.delete('/api/reservations/:id', function(req, res) {
    db.Reservation.destroy({ 
      where: { id: req.params.id } 
    }).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });

  // CHALLENGE SOLUTION
  // app.delete('/api/reservations/:id', function(req, res) {
  //   db.Reservation.findAll({}).then(function(rows) {
  //     const reservedList = rows.splice(0,5);

  //     for( let i = 0; i < reservedList.length; i++ ) {

  //       if( reservedList[i].id === req.params.id ) {
  //         return res.json({ success: false });
  //       }
  //     }

  //     db.Reservation.destroy({ 
  //       where: { id: req.params.id } 
  //     }).then(function() {
  //       res.json({ success: true });
  //     }).catch(function(error) {
  //       res.json({ error: error });
  //     });

  //   }).catch(function(error) {
  //     res.json({ error: error });
  //   });
  // });

}