/* PACKAGES */
const path = require('path');
//const logger = require('morgan');
const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const toDontsController = require('./controllers/toDonts.js')

/* APP SETTINGS */
const app = express();
const PORT = process.env.PORT || 3000;

/* OVERRIDE */
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

/* LOG */
//app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

/* VIEWS */
app.set('view engine', 'hbs');

/* CONTROLLERS */
app.use('/toDonts', toDontsController);

/* HOME */
app.get('/', (req, res) => {
    res.send('Welcome Home!');
})

/* START SERVER + LISTEN */
app.listen(PORT, () => {
    console.info('Server is HOT', PORT, '//', new Date());
});