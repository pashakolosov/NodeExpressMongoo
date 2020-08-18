const express = require('express');
const fs = require('fs');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const MiddleWare_serverLog = require('./middleWare/server_log');


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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use(MiddleWare_serverLog);
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);

app.listen(PORT, () => console.log(`server has been started on ${PORT} port`));