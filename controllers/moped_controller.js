var express = require("express");
var router = express.Router();
var db = require("../models");
var build = require('../models')['moped'];

router.get('/index', function(req, res) {
    res.redirect('/index');
});

router.get('/', function(req, res) {
    db.Build.findAll({}).then(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


router.post('/', function(req, res) {
    db.Build.create({
        moped_part: req.body.moped_part
    }, {
        installed: req.body.installed
    }).then(function(data) {
        res.redirect('/');
    });
});

router.put('/build/update', function(req, res) {
    db.Build.update({ installed: true }, {
        where: { id: req.body.id }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;