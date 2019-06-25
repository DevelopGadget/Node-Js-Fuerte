const express = require('express');
const app = express();
const path = require('path');

//Puerto
app.set('port', process.env.PORT || 3000);

//Uses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

require('./Routes/User.routes').User(app);

//Listen
const server = app.listen(app.get('port'), () => {
    console.log('Init');
});
require('./Controllers/Socket.controller')(server);