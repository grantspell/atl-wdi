const express = require('express')
const router = express.Router()
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

/* HOME ROUTE */

router.get('/', (req, res) => {
    res.redirect('/students')
})

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

/* POST ROUTE */

router.post('/', (req, res) => {
    
    const newStudent = req.body

    StudentModel.create( newStudent )
        .then(() => {
            res.redirect('/students')
        })
})

/* EDIT ROUTE */

router.get('/:id/edit', (req, res) => {
    
    const studentId = req.params.id

    StudentModel.findById(studentId)
        .then((student) => {
            res.render('student/edit', {
                student: student
            })
        })

})

/* UPDATE ROUTE */

router.put('/:id', (req,res) => {

    const studentIdToUpdate = req.params.id
    const updatedStudent = req.body

    StudentModel.findByIdAndUpdate({ id: studentIdToUpdate }, updatedStudent, { new: true })
        .then(() => {
            response.redirect(`/students/${studentIdToUpdate}`)
        })
        .catch((error) => {
            console.log(error)
        })

})

/* DELETE ROUTE */

router.get('/:id/delete', (req, res) => {

    const studentId = req.params.id

    StudentModel.findOneAndRemove(studentId)
        .then((student) => {
            res.send('You deleted it!')
        })

})

module.exports = router