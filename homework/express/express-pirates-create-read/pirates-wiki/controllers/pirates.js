/* REQUIREMENTS */
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

/* ALL ROUTES FOR '/pirate' */

/* INDEX */
router.get('/', (req, res) => {
    console.log(data);
    res.render('pirates/index', {
    pirates: piratesList
    });
});

/* NEW */
router.get('/new', (req, res) => {
    router.post('pirates/new');
})
/* SHOW */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = data.piratesList[id];
    console.log(pirate);
    if(!pirate){
        res.render('pirates/show', {
            error: "No pirate with this ID #"
        })
    } else {
        res.render('pirates/show', {pirate})
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    data.piratesList.push(newPirate);
    res.redirect('/pirates');
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    data.piratesList.push(newPirate);
    res.redirect('/index');
})

/* EXPORTS */
module.exports = router;