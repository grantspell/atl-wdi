const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.get('/math/:operator', (req, res) => {

    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if(req.params.operator === "add"){
      res.send(`${num1 + num2}`)
    } else if (req.params.operator === "subtract"){
      res.send(`${num1 - num2}`)
    } else if (req.params.operator === "divide"){
      res.send(`${num1 / num2}`)
    } else if (req.params.operator === "multiply"){
      res.send(`${num1 * num2}`)
    } else {
      res.send("invalid")
    }

});

app.get('/greeting', (req, res) => {
    console.log(req.query);

    res.render('greeting', {
        name: req.query.name
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('hello-express is listening ' + PORT);
});