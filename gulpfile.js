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
        .pipe(gp.less({}))
        .pipe(gp.csso())
        .pipe(gulp.dest('build/static/css/'))
})