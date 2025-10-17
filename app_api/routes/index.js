const express = require('express');
const router = express.Router();

// This is where we import the controller we will route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)    // GET method routes tripsList
    .post(tripsController.tripsAddTrip); // POST Method Adds a trip
    
// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes TripsUpdateTrip - requires parameter
// DELETE Method routes tripsDeleteTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);    // DELETE method deletes a trip

module.exports = router;