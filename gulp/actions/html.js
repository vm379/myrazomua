import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

export const html = () => {
    return gulp.src("./src/html/*.html")

        .pipe(plumber(
            notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))

        .pipe(fileinclude())
        .pipe(versionNumber(

            {
                // 'value': '%DT%',
                'value': '%MDS%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            }

        ))
        .pipe(gulp.dest("./build/"));
}