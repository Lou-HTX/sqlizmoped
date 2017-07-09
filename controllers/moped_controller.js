var express = require("express");
var router = express.Router();
var db = require("../models");
var build = require('../models');
// var burger = require('../models')['burgers'];

// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         db.Build.findAll({}).then(function(dbBuild) {
//             res.json(dbBuild);
//         });
//     });

//     app.get("/", function(req, res) {
//         db.Build.create(req.body).then(function(dbBuild) {
//             res.json(dbBuild);
//         });
//     });

//     app.get("/", function(req, res) {
//         db.Build.delete({}).then(function(dbBuild) {
//             res.json(dbBuild);
//         });
//     });
// }

// router.get('/', function(req, res) {
//     res.redirect('/moped')
// });

// router.get('/', function(req, res) {
//     db.Build.findAll({}).then(function(data) {
//         var hbsObject = { burgers: data };
//         console.log(hbsObject);
//         res.render('main', hbsObject);
//     });
// });


router.post('/', function(req, res) {
    db.Build.create({
        moped_part: req.body.moped_part
    }, {
        installed: req.body.installed
    }).then(function(data) {
        res.redirect('/')
    });
});

// router.put('/moped/update/:id', function(req, res) {
//     db.Build.update({ installed: req.body.installed }, {
//         fields: ['installed'],
//         where: { id: req.params.id }
//     }).then(function(data) {
//         res.redirect('/moped')
//     });
// });

// PUT route for updating posts
// app.put("/api/posts", function(req, res) {
//     db.Post.update(
//         req.body, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function(dbPost) {
//         res.json(dbPost);
//     });
// });

// router.put("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     Build.update({
//         installed: req.body.installed
//     }, condition, function() {
//         res.redirect("/");
//     });
// });

// router.put('/:id', function(req, res) {
//     db.Build.update({
//         installed: req.body.installed
//     }, {
//         where: {
//             id: req.body.id
//         }
//     }).then(function(data) {
//         res.redirect('/');
//     });
// });

module.exports = router;