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

  // API Requests for /api/waitinglist
  // Below code controls what happens when a request is made to /api/waitinglist

  // GET Request
  // Responds with the current waiting list
  app.get('/api/waitinglist', function(req, res) {
    db.WaitingList.findAll({}).then(function(rows) {
      res.json(rows)
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST Request
  // Adds a new customer to the waiting list
  // Responds with success: true or false if successful
  app.post('/api/waitinglist', function(req, res) {
    db.WaitingList.create(req.body).then(function(rows) {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    });
  });

  // API Requests for /api/waitinglist/:id
  // Below code controls what happens when a request is made to /api/waitinglist/:id

  // GET Request
  // Responds with just the requested wait listed customer at the referenced id
  app.get('/api/waitinglist/:id', function(req, res) {
    db.WaitingList.find({ where: { id: req.params.id }})
      .then(function(data){
        res.json(data);
      }).catch(function(error) {
        res.json({ error: error });
      });
  });

  // PUT Request
  // Replaces the customer at the referenced id with the one provided
  // Responds with success: true or false if successful
  app.put('/api/waitinglist/:id', function(req, res) {
    db.WaitingList.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE Request
  // Removes the customer at the referenced id
  // Responds with success: true or false if successful

  app.delete('/api/waitinglist/:id', function(req, res) {
    db.WaitingList.destroy({ 
      where: { id: req.params.id } 
    }).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });

  // ULTRA CHALLENGE SOLUTION


  app.delete('/api/reservations/:id', function(req, res) {

    // First we remove the requested reservation
    db.Reservation.destroy({ 
      where: { id: req.params.id } 
    }).then(function() {

      // Then we use findAll to get the Waiting List
      db.WaitingList.findAll({}).then(function(rows) {
       
        // Create a table object from the first result in the WaitingList
        const firstTable = {
          name: rows[0].name,
          phoneNumber: rows[0].phoneNumber,
          email: rows[0].email
        }

        // Save the id of that first result so we remove it later
        const firstId = rows[0].id

        // Add the table object we created to the Reservations
        db.Reservation.create(firstTable).then(function() {

          // Then delete that table from the Waiting List using the id
          db.WaitingList.destroy({ where: {id: firstId } }).then(function(){

            // Finally respond with success
            res.json({success: true})
          })
        })
      })
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });
}