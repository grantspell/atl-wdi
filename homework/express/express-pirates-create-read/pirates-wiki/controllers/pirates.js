/* REQUIREMENTS */
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js');

/* ALL ROUTES FOR '/pirate' */

/* INDEX */
router.get('/', (req, res) => {
    router.post();
})
/* NEW */
router.get('/new', (req, res) => {
    router.post();
})
/* SHOW */
router.get('/:id', (req, res) => {
    router.post();
})
/* CREATE */
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    data.piratesList.push(newPirate);
    res.redirect('/index');
})

/* EXPORTS */
module.exports = router;