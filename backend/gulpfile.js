const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  pug = require('gulp-pug'),
  server = require('browser-sync').create();

gulp.task('pug', ()=>{
  return gulp.src('./views/pages/*.pug')
    .pipe(pug())
    .on('error', (err) => {
      console.error('Error in pug task', err.toString());
    })
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', () => {
  return gulp.src('./views/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('error', (err) => {
      console.error('Error in sass task', err.toString());
    })
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./public/css/'))
    .pipe(server.stream())
});

gulp.task('browser-sync', function () {
  server.init({
    proxy: "localhost:3000"
  });
});

gulp.task('default', () => {
  gulp.watch('./views/pages/*.pug', gulp.series('pug'));
  gulp.watch('./views/scss/*.scss', gulp.series('sass'));
  gulp.watch('public/*.html',server.reload);
});
