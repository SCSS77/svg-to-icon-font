'use strict';
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var svgmin = require('gulp-svgmin');

var fontName = 'byrfont'; 

gulp.task('icons', function() {
  return gulp.src('assets/icons/*.svg')
    .pipe(svgmin())
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'assets/scss/_icons.scss',
      targetPath: '../css/icons.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: false,
      formats: ['eot', 'woff', 'woff2', 'ttf'],
      normalize: true,
      timestamp: Math.floor(Date.now() / 1000)
    }))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', gulp.series('icons'));