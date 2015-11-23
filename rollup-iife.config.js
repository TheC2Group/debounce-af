import babel from 'rollup-plugin-babel';

const pjson = require('./package.json');

const filename = pjson['jsnext:main'];

export default {
    entry: filename,
    dest: `iife/${filename}`,
    format: 'iife',
    plugins: [
        babel()
    ],
    moduleName: pjson['export']
};
