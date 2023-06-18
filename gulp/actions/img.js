import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

export const img = () => {
    return gulp.src("./src/img/**/*.*")

        // 
        // .pipe(newer('./build/img/'))
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{ removeViewBox: false }],
        //     interlaced: true,
        //     optimizationlevel: 3
        // }))
        // 

        .pipe(gulp.dest("./build/img/"));
}