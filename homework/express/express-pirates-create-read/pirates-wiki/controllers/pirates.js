/* REQUIREMENTS */
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

/* ALL ROUTES FOR '/pirate' */

/* INDEX */
router.get('/', (req, res) => {
    console.log(pirates);
    res.render('pirates/index', {
    pirates: pirates.piratesList
    });
});

/* NEW */
router.get('/new', (req, res) => {
    res.render('pirates/new');
});

/* SHOW */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates.piratesList[id];
    console.log(pirate);
    if (!pirate){
        res.render('pirates/show', {
            error: "Arrrgghh! No pirate with this ID"
        })
    } else {
        res.render('pirates/show', {pirate})
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.piratesList.push(newPirate);
    res.redirect('/pirates');
});

/* EDIT */
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirate: {
            id: req.params.id,
            name: pirates.piratesList[req.params.id].name,
            birthplace: pirates.piratesList[req.params.id].birthplace,
            death_year: pirates.piratesList[req.params.id].death_year,
            base: pirates.piratesList[req.params.id].base,
            nickname: pirates.piratesList[req.params.id].nickname
        }
    });
});

/* EXPORTS */
module.exports = router;