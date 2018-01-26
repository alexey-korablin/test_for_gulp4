module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/static/less/**/*.less', $.gulp.series('less'))
        $.gulp.watch('src/static/js/*.js', $.gulp.series('script'))
    });
};