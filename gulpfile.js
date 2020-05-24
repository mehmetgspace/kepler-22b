const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'))
}

exports.style = style;
