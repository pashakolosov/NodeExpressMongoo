const {Router} = require('express')
const Card = require('../models/card')
const router = Router()
const Course = require('../models/course')

router.post('/add', async (req, res) => {
    const course = await Course.getById(req.body.id)
    await Card.add(course) 
    res.redirect('/card')
})

router.get('/', async (req, res) => {
    const card = await Card.fetch()
    res.render('card', {
        title: 'Card',
        courses: card.courses,
        price: card.price,
        isCard: true
    })
})

module.exports = router
