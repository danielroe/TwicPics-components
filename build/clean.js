/* eslint-disable no-console */
import __dirname from "./__dirname.js";
import { readdir, stat } from "fs/promises";
import { remove } from "fs-extra";

const toDelete = new Set( [
    `.angular`, `.cache`, `.next`, `.nuxt`, `.svelte-kit`, `build`, `dist`, `node_modules`,
    `package-lock.json`, `yarn.lock`,
] );

const clean = async dir => Promise.all(
    ( await readdir( dir ) ).map( file => {
        const path = `${ dir }/${ file }`;
        return (
            toDelete.has( file ) ?
                remove( path ) :
                stat( path ).then( s => ( s.isDirectory() && clean( path ) ) )
        );
    } )
);

export default () => {
    console.log( `cleaning dependencies in samples subdirectory...` );
    clean( `${ __dirname }/../samples` );
    console.log( `cleaning dependencies in tests subdirectory...` );
    clean( `${ __dirname }/../tests` );
};
