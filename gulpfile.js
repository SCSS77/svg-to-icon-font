const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const svgmin = require('gulp-svgmin');

const fontName = 'byrfont';

gulp.task('icons', () => {
  return gulp.src(['assets/icons/*.svg'])
    .pipe(svgmin())
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'assets/scss/_icons.scss',
      targetPath: '../css/icons.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['eot', 'woff', 'woff2', 'ttf'],
      timestamp: Math.floor(Date.now() / 1000),
      normalize: true,
      fontHeight: 1001
    }))
    .on('glyphs', function (glyphs, options) {
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', gulp.series('icons'));