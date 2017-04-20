var gulp = require('gulp'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus'),
  beeper = require('beeper');

var buildFolder = 'src/',
  srcFolder = 'src-dev/',
  path = {
    build: {
      styles: buildFolder + 'css/'
    },
    src: {
      styles: srcFolder + 'styles/main.styl'
    },
    watch: {
      styles: srcFolder + 'styles/**/*.styl'
    }
  };

watch(path.watch.styles, function(event){
  gulp.start('style')
});

gulp.task('style', function() {
  return gulp.src(path.src.styles)
    .pipe(plumber({
      errorHandler: errorCb
    }))
    .pipe(stylus({
      linenos: true,
      sourcemap: {
        inline: true
      }}))
    .pipe(autoprefixer({
      browsers: ['last 2 version', '> 5%']
    }))
    .pipe(gulp.dest(path.build.styles));
});

gulp.task('default');

function errorCb(error) {
  console.log(error.message);
  this.emit('end');
  beeper(1);
}