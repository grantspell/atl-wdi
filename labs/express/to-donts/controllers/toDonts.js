const express = require('express');
const router = express.Router();
const data = require('../data.js');

/* INDEX TODONTS */
router.get('/', (req, res) => {
    console.log(data);
    res.render('todonts/index', {
        toDonts: data.seededToDonts
    })
})

/* CREATE TODONTS */
router.get('/new', (req, res) => {
    res.render('toDonts/new');
})

/* SHOW TODONTS */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const toDont = data.seededToDonts[id];
    console.log(toDont);
    if(!toDont){
        res.render('toDonts/show', {
            error: "No toDont found with this ID"
        })
    } else {
        res.render('toDonts/show', {toDont})
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newToDont = req.body;
    data.seededToDonts.push(newToDont);
    res.redirect('/toDonts');
});

/* EDIT */
router.get('/:id/edit', (req, res) => {
    res.render('toDonts/edit', {
        toDont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});

/* UPDATE */
router.put('/:id', (req, res) => {
    var toDontToEdit = data.seededToDonts[req.params.id];

    toDontToEdit.description = req.body.description;
    toDontToEdit.urgent = req.body.urgent;
})

/* DELETE */
router.delete('/:id', (req, res) => {
    data.seededToDonts.splice(req.params.id, 1);

    res.redirect('/toDonts');
});

module.exports = router;