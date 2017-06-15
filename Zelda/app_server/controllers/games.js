/* GET 'home' page */
module.exports.timeline = function(req,res){
   res.render('timeline', {title: 'Home'});
};

/* GET 'map' page */
module.exports.botwmap = function(req,res){
   res.render('botwmap', {title: 'Breath of the Wild'});
};



/* GET 'kakoriko' page */
module.exports.kakariko = function(req,res){
   res.render('kakariko', {title: 'Kakariko village'});
};



/* GET 'counter' page */
module.exports.counter = function(req,res){
   res.render('counter', {title: 'Neo4j'});
};


/* GET 'gerudo' page */
module.exports.gerudo = function(req,res){
   res.render('gerudo', {title: 'Gerudo Town'});
};


/* GET 'goron' page */
module.exports.goron = function(req,res){
   res.render('goron', {title: 'Goron City'});
};


/* GET 'rito' page */
module.exports.rito = function(req,res){
   res.render('rito', {title: 'Rito Village'});
};


/* GET 'gerudo' page */
module.exports.zora = function(req,res){
   res.render('zora', {title: 'Zoras Domain'});
};


