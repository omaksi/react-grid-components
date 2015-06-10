var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('components', function () {
    return gulp.src('src/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('.'));
});

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');

gulp.task('example', ['components'], function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './example/index.jsx',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .on('error', console.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./example/dist/'));
});

gulp.task('default', ['components', 'example']);
