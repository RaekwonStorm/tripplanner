var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');

var app = express();
var routes = require('./routes');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({cache: false});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
// app.use(express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/', routes);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send('ERR');
});

app.listen(3000);
