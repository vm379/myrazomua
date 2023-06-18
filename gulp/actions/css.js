import gulp from 'gulp';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const sass = gulpSass(dartSass);

export const css = () => {
    return gulp.src("./src/scss/main.scss", { sourcemaps: true })

        .pipe(plumber(
            notify.onError({
                title: "CSS",
                message: "Error: <%= error.message %>"
            })
        ))

        .pipe(sass({
            outputStyle: 'expanded'
        }))

        .pipe(autoprefixer({
            grid: true,
            overrideBrowserlist: ["last 3 versions"],
            cascade: true
        }))

        .pipe(groupMediaQueries())

        .pipe(rename("style.css"))
        .pipe(gulp.dest("./build/css/"))

        // ;
        .pipe(cleanCss())

        .pipe(rename({ extname: ".min.css" }))
        .pipe(gulp.dest("./build/css/"));
    // 
}