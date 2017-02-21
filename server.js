/*
 * Config
 */

var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 8000);
app.set('view engine', 'pug');
app.set('views', './views');


/*
 * Middleware
 */

app.use(express.static(path.join(__dirname, '/public')));


/*
 * Routes
 */

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.use(function(req, res) {
  res.type('text/html');
  res.status(404);
  res.render('404');
});


/*
 * Start Express
 */

app.listen(app.get('port'), function() {
  console.log('Express started and is listening on port ' + app.get('port') + '...');
});
