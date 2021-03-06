const {Router} = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', async (req, res) => {
    const courses = await Course.getAll();
    res.render('courses', {
        title: 'courses',
        isCourses: true,
        courses
    });
});

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const course = await Course.getById(req.params.id)

    res.render('course-edit', {
        title: `Edit ${course.title}`,
        course
    })
})

router.get('/:id',async (req, res) => {
    const course = await Course.getById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Курс ${course.title}`,
        course
    })
})

module.exports = router;