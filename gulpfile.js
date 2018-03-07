
'use strict';

// Modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./example/config.default.js');

gulp.task('copy_libs', function () {

  var source = [
    'node_modules/bootstrap/**/*',
    'node_modules/bootstrap-rtl/**/*',
    'node_modules/fitvids/**/*',
    'node_modules/highlightjs/**/*',
    'node_modules/jquery/**/*',
    'node_modules/masonry-layout/**/*',
    'node_modules/sweetalert2/**/*',
    'node_modules/jquery-backstretch/**/*'
  ];

  var dest = 'themes/default/public/lib';

  return gulp
    .src(source, { base: 'node_modules' })
    .pipe(gulp.dest(dest));

});

gulp.task('scss2css', function () {
  return gulp.src(`themes/${config.theme_name}/public/styles/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`themes/${config.theme_name}/public/styles/`));
});

gulp.task('sasswatch', function () {
  gulp.watch(`themes/${config.theme_name}/public/styles/*.scss`, ['scss2css']);
});

// Default
gulp.task('default', ['copy_libs']);
