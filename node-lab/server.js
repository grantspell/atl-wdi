const http = require('http');
const urlParser = require('url'); // Adds urlParser
const server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  var urlObj  = urlParser.parse( request.url ); //
  var pathname = urlObj.pathname; // parsing our the important info in the url
  
  console.log("requested: " + pathname);
  response.writeHead(200, {'Content-Type': 'text/html'});



  response.write('<html>');
  const message1 = "Fun Times";
  const fun1 = "Drink";
  const fun2 = "Lay";
  const fun3 = "Strut";

  if(pathname === '/fun-times'){
    response.write(`<h1>${message1}!</h1>`);
    response.write(`<ul><li>${fun1}</li><li>${fun2}</li><li>${fun3}</li></ul>`);
  }
  
  const message2 = "Favorite Movies";
  const movie1 = "Alien";
  const movie2 = "The Parent Trap";
  const movie3 = "Grey Gardens";

  if(pathname === '/movies'){
      response.write(`<h1>${message2}</h1>`);
      response.write(`<ul><li>${movie1}</li><li>${movie2}</li><li>${movie3}</li></ul>`);
  }

  if(pathname === '/portfolio'){
        response.write(`<h1>COMING SOON</h1>`)
  }

  const link1 = "Fun Times!";
  const link2 = "Movies!";
  const link3 = "Portfolio!";

  response.write('<html>Hello World!');
  response.write('<br/>');
  response.write(`<a href="http://localhost:3001/fun-times">${link1}</a>`);
  response.write('<br/>');
  response.write(`<a href="http://localhost:3001/movies">${link2}</a>`)
  response.write('<br/>');
  response.write(`<a href="http://localhost:3001/portfolio">${link3}</a>`)
  response.write('<script>console.log("I  \'m client-side JavaScript being sent via server-side JavaScript");</script>');
  response.write('</html>');
  response.end();
});
  // 10.1.4.117:3001
  