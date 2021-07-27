"use strict";

const reactPackage = require( `react/package.json` );
const { readFile, writeFile } = require( `fs/promises` );

if ( !reactPackage.exports ) {
    reactPackage.exports = {
        ".": `./index.js`,
        "./jsx-dev-runtime": `./jsx-dev-runtime.js`,
        "./jsx-runtime": `./jsx-runtime.js`,
        "./*": `./*`,
    };
    writeFile( require.resolve( `react/package.json` ), JSON.stringify( reactPackage, null, `  ` ) );
}

const copy = async file => writeFile( file, await readFile( `../../dist/sample-next/${ file }`, `utf8` ) );

copy( `esm.js` );
copy( `style.css` );
