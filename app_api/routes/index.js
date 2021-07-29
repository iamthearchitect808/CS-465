const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
//const roomsController = require('../controllers/rooms');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

//router
//    .route('/rooms')
//    .get(roomsController.roomsList);

//router
//    .route('/rooms/:roomName')

module.exports = router;