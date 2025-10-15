const express = require('express');
const router = express.Router();

// This is where we import the controller we will route
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)    // GET method routes tripsList
    .post(tripsController.tripsAddTrip);    // POST Method Adds a trip

// GET Method reoutes tripsFindByCode - requires parameter
// PUT Method routes TripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;