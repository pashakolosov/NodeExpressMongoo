const express = require('express');
const fs = require('fs');
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3000;


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use((req, res, next) => {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    let data = `${hours}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`

    fs.appendFile('server.log', data + '\n', () => console.log(data))
    next()
})


app.get('/', (req, res) => res.render('index')

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`));