const express = require('express');
const app = express();

//Puerto
app.set('port', process.env.PORT || 3000);

//Uses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./Routes/User.routes').User(app);

//Listen
app.listen(app.get('port'), () => {
    console.log('Init');

});