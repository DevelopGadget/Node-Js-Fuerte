const express = require('express');
const app = express();
const morgan = require('morgan');

//Puerto
app.set('port', process.env.PORT || 3000);

//Uses
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./Routes/Hero.routes').HeroRoutes(app);

//Listen
app.listen(app.get('port'), () => {
    console.log('Init')

});