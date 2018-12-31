/**
 * Iterator for mapping routes.
 *
 * DO NOT ALTER THIS CODE.
 * Altering might result in unhandled exceptions.
 *
 * @author Himanshu Shrivastava <himanshu31shr@gmail.com>
 */
const express = require("express"),
    routes = express.Router(),
    fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    {app: {defaultRoute}} = require('../config'),
    HomeController = require('../controllers/HomeController');

// let iterator = (files, sub = '') => {
//     _.pullAllBy(files, ['package.json', 'routes.js'])
//
//     if(_.isEmpty(files) && sub === ''){
//         routes.get('/', function(req, res){
//             res.send('No routes defined');
//         })
//     }
//
//     files.forEach( function( file ) {
//         let currFile = path.join( __dirname+'/'+sub,file ),
//             stat = fs.statSync(currFile)
//
//         if( stat.isFile()){
//             let fileName = _.lowerCase(file.slice(0, file.indexOf('.')));
//             if(defaultRoute.route === fileName){
//                 return routes.use('/', require(currFile))
//             } else {
//                 return routes.use('/'+sub, require(currFile))
//
//             }
//         } else {
//             let dir = fs.readdirSync(currFile);
//             if(!_.isEmpty(dir)){
//                 return iterator(dir, path.join(sub, file));
//             }
//         }
//     });
// }
//
// iterator(fs.readdirSync( path.join(__dirname)));

routes.get('*', HomeController.index);
module.exports = routes;