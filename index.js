const express = require('express');
const fs = require('fs');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3000;

// handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

// server.log
app.use((req, res, next) => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let data = `${hours}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`;

    fs.appendFile('server.log', data + '\n', () => console.log(data));
    next();
});


app.get('/', (req, res) => res.render('index'));

app.get('/add', (req, res) => res.render('add'));

app.get('/courses', (req, res) => res.render('courses'));

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`));