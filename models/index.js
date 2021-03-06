'use strict';

const fs        = require('fs'),
    path      = require('path'),
    Sequelize = require('sequelize'),
    basename  = path.basename(__filename),
    { database }= require('../config'),
    db        = {};

const sequelize = new Sequelize(database.name, database.username, database.password, {
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: process.env.ENVIRONMENT === 'development',
    operatorsAliases: false
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;