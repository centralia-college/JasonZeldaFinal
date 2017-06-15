var express = require('express');
var router = express.Router();
var ctrlGames = require('../controllers/games');
var ctrlFaqs = require('../controllers/faqs');




/*Game pages */

router.get('/', ctrlGames.timeline);
router.get('/botwmap',ctrlGames.botwmap);
router.get('/kakariko', ctrlGames.kakariko);
router.get('/counter', ctrlGames.counter);
router.get('/gerudo', ctrlGames.gerudo);
router.get('/goron', ctrlGames.goron);
router.get('/rito', ctrlGames.rito);
router.get('/zora', ctrlGames.zora);





module.exports = router;
