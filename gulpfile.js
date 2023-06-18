import gulp from 'gulp';
import { dev } from './gulp/tasks/dev.js';

// default task
gulp.task("default", async () => dev());

// build dist
gulp.task("dist", async () => { console.log('dist') });

// import * as path from 'path';
// const root = path.basename(path.resolve());