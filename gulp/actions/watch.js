import gulp from 'gulp';

import browserSync from 'browser-sync';

import { html } from './html.js';
import { css } from './css.js';
import { js } from './js.js';
import { img } from './img.js';
import { fonts } from './fonts.js';

const reload = () => { browserSync.reload(); }

async function htmlWatch() {
    html();
    reload();
}

async function cssWatch() {
    css();
    reload();
}

async function jsWatch() {
    js();
    reload();
}

async function imgWatch() {
    img();
    reload();
}

async function fontsWatch() {
    fonts();
    reload();
}

export const watch = () => {
    gulp.watch('./src/html', htmlWatch);
    gulp.watch('./src/scss', cssWatch);
    gulp.watch('./src/js', jsWatch);
    gulp.watch('./src/img', imgWatch);
    gulp.watch('./src/fonts', fontsWatch);
}