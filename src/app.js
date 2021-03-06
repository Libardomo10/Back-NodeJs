const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3257);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
require('./controler/locationController')(app);

app.listen(app.get('port'), () => {
    console.log('Server listen on port 3257');
});     