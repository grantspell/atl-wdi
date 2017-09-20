//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
//assigning 3000 as our port
const PORT = 3000;
const hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

app.get("/", (req, res) => {
    const message = "Welcome to Pizza Express!"

    res.send( message )
})

app.get("/topping/:type", (req, res, next) => {
    let type = (req.query.params);

    res.send( type + " pizza! Good choice.")
})

//tells the server to listen for requests on port 3000
app.listen(PORT, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + PORT);
    console.log("==========================")
});