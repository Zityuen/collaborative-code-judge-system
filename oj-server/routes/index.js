var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
	console.log("this is router");
    res.sendFile("index.html", {root: path.join(__dirname, '../../public')});
});

module.exports = router;
