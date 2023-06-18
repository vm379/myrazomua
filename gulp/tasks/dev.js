import { server } from '../actions/server.js';
import { copy } from '../actions/copy.js';
import { watch } from '../actions/watch.js';
import { del } from '../actions/del.js';

export const dev = () => {
    del();
    copy();
    watch();
    server();
}