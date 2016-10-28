'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./themes/hugo-litecoin-theme/static/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 5%']
    }))
    .pipe(gulp.dest('./themes/hugo-litecoin-theme/static/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./themes/hugo-litecoin-theme/static/sass/**/*.scss', ['sass']);
  gulp.watch('./themes/hugo-litecoin-theme/static/sass/**/*.sass', ['sass']);
});
