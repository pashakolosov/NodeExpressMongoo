const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});


//handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views');


app.get('/', (req, res) => res.render('index'));

app.get('/about', (req, res) => res.render('about'));

app.listen(PORT, () => console.log(`server had been started on ${PORT} port`))