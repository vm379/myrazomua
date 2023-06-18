import { deleteAsync } from 'del';

const deletedPaths = await deleteAsync(['./build'], { dryRun: false });
// console.log('Files and directories that would be deleted:\n', deletedPaths.join('\n'));

export const del = () => {
    return deletedPaths.join();
}