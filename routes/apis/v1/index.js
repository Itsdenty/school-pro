let router = require('express').Router();

router.get('/', function(req, res){
    res.send('You\'ve reached api/v1 routes');
});

module.exports = router;
