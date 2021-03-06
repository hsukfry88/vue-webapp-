'use strict';

var db = require('mysql-promise')();
var cf = require('../config/db');
console.log(cf.get('database'));
db.configure({
	"host": cf.get('host'),
	"user": cf.get('user'),
	"password": cf.get('password'),
	"database": cf.get('database')
});

module.exports = db;