
const express = require('express'),
  config = require('./config/config');

const app = express();
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
  res.render('admin')
})

app.get('/measurements', (req, res) => {
  res.render('measurements')
})

app.get('/user_details', (req, res) => {
  res.render('user_details')
})

app.get('/user_school_data', (req, res) => {
  res.render('user_school_data')
})



// module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
