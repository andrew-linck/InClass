const tableList = require('../data/tableList');
const waitingList = require('../data/waitingList')

module.exports = function (app) {
    app.get('/api/tables', function (req, res) {
        // all customers that have table reserverd
        res.json(tableList);
    });

    app.post('/api/tables', function (req, res) {
        // all customers that have table reserverd
        if (tableList.length < 5) {
            tableList.push(req.body)
        } else {
            waitingList.push(req.body);
        }
        res.json(tableList);
    });

    app.get('/api/waitinglist', function (req, res) {
        // all customers on the waiting list
        res.json(waitingList);
    });

}