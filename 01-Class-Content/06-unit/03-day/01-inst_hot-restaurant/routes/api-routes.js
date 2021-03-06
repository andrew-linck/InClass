let tableList = require('../data/table-list.js');
let waitingList = require('../data/waiting-list.js');

module.exports = function (app) {

  /**
   * GET the waitlist
   */
  app.get('/api/waitinglist', function (req, res) {
    res.json(waitingList);
  });

  /**
   * GET the tablelist 
   */
  app.get('/api/tables', function (req, res) {
    res.json(tableList);
  });

  /**
   * If there are fewer than 5 reservations, add the new reservation to the tablelist
   * Otherwise add the new reservation to the waitlist
   */
  app.post('/api/tables', function (req, res) {
    if (tableList.length < 5) {
      tableList.push(req.body); 
    } else {
      waitingList.push(req.body);
    }

    res.end();
  });
}
