const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

/* INDEX ROUTE */

router.get('/', (request, response) => {
    StudentModel.find({})
        .then((students) => {
            response.render('student/index', {
                students: students
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
});

/* CREATE ROUTE */

router.get('/new', (req, res) => {
    res.render('student/new')
})

/* SHOW ROUTE */

router.get('/:id', (request, response) => {
    const studentId = request.params.id

    StudentModel.findById(studentId)
        .then((student) => {
            response.render('student/show', {
                student: student
            })
        })

})

/* DELETE ROUTE */

router.get('/:id/delete', (request, response) => {

    const studentId = request.params.id

    StudentModel.findOneAndRemove(studentId)
        .then((student) => {
            response.send('You deleted it!')
        })

})

/* POST ROUTE */

router.post('/', (req, res) => {
    
})

module.exports = router