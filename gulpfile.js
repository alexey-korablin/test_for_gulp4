'use strict';

// let pug = require('gulp-pug');
let gulp = require('gulp');
let gp = require('gulp-load-plugins')();

gulp.task('pug', () => {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
})

gulp.task('less', () => {
    return gulp.src('src/static/less/*.less')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.less({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .on("error", gp.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Style"
          }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css/'))
})

gulp.task('watch', () => {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug')) // gulp.series('pug') 'pug' - it is name of task
    gulp.watch('src/static/less/**/*.less', gulp.series('less'))
})

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'less'), 'watch'
));