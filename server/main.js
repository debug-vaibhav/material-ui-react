/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index'); //importing routes
const middleware = require('./middleware');
const port = parseInt(require('minimist')(process.argv.slice(2)).port || process.env.PORT || '8080', 10);
const path = require('path');
const app = express();
const NODE_ENV = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (NODE_ENV !== 'development') {
  // use the gzipped bundle
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
  });
  app.get('*.css', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });
}

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

middleware(app); //register middleware to validate token for routes
routes(app); //register the api routes

if (NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../internals/webpack/webpack.dev.babel');

  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath: '/',
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  //configuring client routes
  app.get(['/documents', '/details', '/about'], function (req, res) {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });

  app.get('/', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}
else {
  //configuring client routes
  app.get(['/documents', '/details', '/about'], function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });

  app.use('/', express.static(path.join(__dirname + '/public')));
}

// Start your app.
app.listen(port, err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Express server listening on port:', port);
  console.log('env = ', NODE_ENV, '\n__dirname = ', __dirname, '\nprocess.cwd = ', process.cwd());

  if (NODE_ENV === 'development') {
    console.log('Waiting for webpack to be compiled...');
  }
});
