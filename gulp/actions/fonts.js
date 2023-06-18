import gulp from 'gulp';

export const fonts = () => {
    return gulp.src("./src/fonts/**/*.*")
        .pipe(gulp.dest("./build/fonts/"));
}