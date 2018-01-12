'use strict';

let pug = require('gulp-pug');
let gulp = require('gulp');

gulp.task('pug', () => {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
})