'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach((task) => require(task)());

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'less', 'script:lib', 'script'), 
    $.gulp.parallel('watch', 'serve')
));