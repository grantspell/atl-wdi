//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
//assigning 3000 as our port
const PORT = 3000;
const hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

//tells the server to listen for requests on port 3000
app.listen(PORT, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + PORT);
    console.log("==========================")
});

app.get("/", (req, res) => {
    const message = "Welcome to Pizza Express!"

    res.send( message )
})

app.get("/topping/:type", function(req, res, next) {
    let type = 

    res.send()
})