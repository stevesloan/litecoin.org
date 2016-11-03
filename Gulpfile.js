'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./themes/hugo-litecoin-theme/static/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 5%']
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./themes/hugo-litecoin-theme/static/css'));
});

gulp.task('config', function() {
  return gulp.src(['./config_partials/base.toml', './config_partials/*.toml'])
    .pipe(concat('config.toml'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./themes/hugo-litecoin-theme/static/sass/*.sass',
              './themes/hugo-litecoin-theme/static/sass/*.scss'], ['sass']);
  gulp.watch('./config_partials/*.toml', ['config']);
});
