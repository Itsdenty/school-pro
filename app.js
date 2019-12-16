require('dotenv').config();

let express = require('express');
let logger = require('morgan');

let bodyParser = require('body-parser');
let path = require('path');
let app = express();
// let connection;
let index = require('./routes/apis/v1/index');
let validator = require('express-validator');

let cors = require('cors');
app.use(logger('dev'));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(validator({customValidators: customValidator, customSanitizers: customSanitizer}));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', err);
});

function exitHandler(options, err) {
    if (options.cleanup) database.mongoose.connection.close();
    if (err) _console.log(err.stack);
    //if (options.exit) process.exit();
}

app.listen(3000, () => {
  console.log(`Started on port 3000`);
});


module.exports = app;