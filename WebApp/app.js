const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models/sequelize');
const Posting = require('./models/posting');
const Offering = require('./models/offering');
const postingRoutes = require('./routes/routes');


const app = express();

Posting.hasMany(Offering);
Offering.belongsTo(Posting);

db.sync({ force: false })
    .then(() => {
      console.log('Database and tables synced successfully.');
    })
    .catch(err => {
      console.error('Error syncing database:', err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', postingRoutes);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

