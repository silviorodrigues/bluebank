// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plugins = require('gulp-load-plugins')({ camelize: true });

// Styles
gulp.task('sass', function () {
  gulp.src('app/resources/css/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(plugins.autoprefixer('last 2 versions', 'ie 9', 'ios 6', 'android 4'))
  .pipe(plugins.minifyCss({ keepSpecialComments: 1 }))
  .pipe(gulp.dest('app/resources/css'))
});

// Watch
gulp.task('watch', function() {
  gulp.watch('app/resources/**/*.scss', ['sass']);
});


// Default task
gulp.task('default', ['sass', 'watch']);
