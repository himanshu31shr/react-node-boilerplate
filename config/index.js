/**
 * Iterator for mapping global configurations
 *
 * DO NOT ALTER THIS CODE.
 * Altering might result in unhandled exceptions.
 *
 * @author Himanshu Shrivastava <himanshu31shr@gmail.com>
 */
const fs = require('fs'),
    config = {},
    path = require('path'),
    _ = require('lodash');

let files = fs.readdirSync(path.join(__dirname));

files.forEach(file => {

    _.pullAllBy(files, ['index.js']);

    let currFile = path.join(__dirname, file),
        stat = fs.statSync(currFile);

    if (stat.isFile()) {
        config[file.slice(0, file.indexOf('.'))] = JSON.parse(fs.readFileSync(currFile, 'utf8'));
    }
});

module.exports = config;