/* PACKAGES */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const router = express.Router();
/*APP SETTINGS*/
const app = express();
const PORT = process.env.PORT || 3000;


/* VIEW */
app.set('view engine', 'hbs');

/* CONTROLLERS */
const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

const newController = require('.controllers/new.js');
app.use("/new", newController);

/* HOME */


/* START SERVER */
app.listen(PORT, () => {
    console.info('SERVER UP AND RUNNING @', PORT, "//", new Date());
});