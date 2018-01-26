module.exports = () => {
    $.gulp.task('less', () => {
        return $.gulp.src('src/static/less/*.less')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.less({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Style"
              }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};