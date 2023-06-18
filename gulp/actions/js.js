import gulp from 'gulp';
import webpack from 'webpack-stream';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

export const js = () => {
    return gulp.src("./src/js/script.js")

        .pipe(plumber(
            notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))

        .pipe(webpack({
            mode: 'production', //production|development

            devtool: 'source-map',

            output: {
                filename: 'script.js',
            },

            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader",
                    },
                ]
            }

        }))

        .pipe(gulp.dest("./build/js/"));
}