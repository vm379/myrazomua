import browserSync from 'browser-sync';

export function server() {
    browserSync.init({
        server: { baseDir: "./build" },
        notify: false,
        port: 8888
    });
}