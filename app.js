
const express = require('express'),
  config = require('./config/config');

const app = express();
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Resoltzapi = require('./app/models/article').Resoltzapi;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('admin')
})

app.get('/measurements', (req, res) => {
  Resoltzapi.getAllUsersMeasurements().then( results => {
    return res.render('measurements', {results})
  })
})

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
