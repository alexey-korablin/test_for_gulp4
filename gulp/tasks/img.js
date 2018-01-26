module.exports = () => {
    $.gulp.task('img:build', () => {
        return $.gulp.src('src/static/img/*.{jpg, jpeg, png, gif}')
            // .pipe($.gp.tingpng(''))
            .pipe($.gulp.dest('build/static/img/'))
    });

    $.gulp.task('img:dev', () => {
        return $.gulp.src('src/static/img/*.{jpg, jpeg, png, gif}')
            .pipe($.gulp.dest('build/static/img/'))
    });
};

