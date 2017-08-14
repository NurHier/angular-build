/*!
 * Usage:
 *     use `gulp help` to check out usage introduction!
 */
const angularJs = [
  './node_modules/angular/angular.js',
  './node_modules/angular-ui-router/release/angular-ui-router.js'
];
const gulp = require('gulp');
// const jshint = require('gulp-jshint');
const connect = require('gulp-connect');
const proxy = require('http-proxy-middleware');

gulp.task('js', function () {
  return gulp.src(angularJs).pipe(gulp.dest('./dist/lib/js/'));
});

gulp.task('src', function () {
  gulp.src('./src/**')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function () {
  gulp.src('./src/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});

gulp.task('connect', function () {
  connect.server({
    port: 7878,
    root: './dist/',
    middleware: function (connect, opt) {
      return [
        proxy('/article', {
          target: 'https://interface.meiriyiwen.com/',
          secure: false,
          changeOrigin: true,
          autoRewrite: true
        })
      ]
    }
  });
});

gulp.task('auto',  function () {
  gulp.watch('./src/**', ['js', 'src']);
});

gulp.task('watch', ['js', 'src', 'connect','auto']);

// show help message and exit
gulp.task('help', function () {
  console.log('    gulp clean             ; clean old temp files');
  console.log('    gulp release           ; build and copy to webapp folder');
  console.log('    gulp watch [options]   ; build, watch, and listen');
  console.log('      options: --port      ; listen port');
  console.log('               --backend   ; targeted backend');
  console.log('               --nodebug   ; serve app instead on tmp resource');
  console.log('    gulp help              ; show this message');
});
