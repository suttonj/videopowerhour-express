/**
 * Main application routes
 */

'use strict';

//var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/', require('../app/controllers/home.js'));
  app.use('/api/playlists', require('../app/controllers/playlist.js'));
  app.use('/api/videos', require('../app/controllers/video.js'));
  
  // All undefined asset or api routes should return a 404
  // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  // .get(errors[404]);

  // All other routes should redirect to the index.html
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendfile(app.get('appPath') + '/index.html');
  //   });
};