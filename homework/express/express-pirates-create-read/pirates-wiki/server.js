/* PACKAGES & IMPORTS */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const bodyParser = require('body-parser');

/*APP SETTINGS*/
const app = express();
const PORT = process.env.PORT || 3000;
const piratesController = ("./controllers/pirates")

/* VIEWS */
app.set('view engine', 'hbs');

/* CONTROLLERS */
app.use("/pirates", piratesController);

/* HOME */
app.get('/', (req, res) => {
    res.send('Welcome to the Lagoon!');
});

/* START SERVER */
app.listen(PORT, () => {
    console.info('SERVER UP AND RUNNING @', PORT, "//", new Date());
});