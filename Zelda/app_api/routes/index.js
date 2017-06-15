var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');
var ctrlLocations = require('../controllers/locations');
var ctrlEnemies = require('../controllers/enemies');


//Item routes
router.get('/items', ctrlItems.itemsGetAll);
router.get('/items/:itemid', ctrlItems.itemsGetOne);


//Location routes
router.get('/locations', ctrlLocations.locationsListAll);
router.get('/locations/:locationid', ctrlLocations.locationsGetOne);

//Enemy routes
router.get('/enemies', ctrlEnemies.enemiesListAll);
router.get('/enemies/:enemyid', ctrlEnemies.enemiesGetOne);


module.exports = router;