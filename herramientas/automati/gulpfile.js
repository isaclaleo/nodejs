const gulp = require('gulp');
const server = require('gulp-server-livereload')


gulp.task('build', function (cb) {
    console.log('contruir');
    setTimeout(cb, 1222);
});

gulp.task('server', function (cb) {
    gulp.src('www')
        .pipe(server ({
            livereload: true,
            open: true
        }))
});

gulp.task('default', gulp.series('build', 'server'));