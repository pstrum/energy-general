var gulp = require('gulp');
var config = require('../config').server; // Require the server task object from the config file
var gls = require('gulp-live-server');

// Gulp's task method to define a task and the function that performs the task's operations
gulp.task('serve', function() {
  var server = gls.new([config.serverFile]);
  server.start();
  gulp.watch(['src/**/*.html', 'src/**/*.js', 'src/**/*.scss'], function (file) {
    server.notify.apply(server, [file]);
  });
  gulp.watch(config.serverFile, server.start.bind(server));
});
