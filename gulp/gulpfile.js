var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-media-queries');

gulp.task('sass',function(){
    gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({style : 'expanded'})) 
    .pipe(sourcemaps.write())
    .pipe(cssnext({browsers: ['last 2 versions', 'ie 9']}))
    .pipe(gulp.dest('./'));
});

gulp.task('cmq', function () {
  gulp.src('*.css')
    .pipe(cmq({
      log: false
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['cmq']);