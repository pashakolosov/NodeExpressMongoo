const {Router} = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'add course',
        isAdd: true
    });
});

router.post('/', (req, res) => {
    const {body} = req;
    
    const course = new Course(body.title, body.price, body.img);
    course.save();

    res.redirect('/courses');
});

module.exports = router;