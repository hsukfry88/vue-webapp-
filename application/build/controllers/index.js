'use strict';

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaJsonBody = require('koa-json-body');

var _koaJsonBody2 = _interopRequireDefault(_koaJsonBody);

var _getNews = require('../model/getNews');

var _getNews2 = _interopRequireDefault(_getNews);

var _DeclareModel = require('../model/DeclareModel');

var _DeclareModel2 = _interopRequireDefault(_DeclareModel);

var _PolicyModel = require('../model/PolicyModel');

var _PolicyModel2 = _interopRequireDefault(_PolicyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // var router = require('koa-router')();
// var newsModel=require('../model/getNews');


//import render from 'koa-swig';

var body = (0, _koaJsonBody2.default)();
var router = (0, _koaRouter2.default)();
var PolicyModel = new _PolicyModel2.default();
function CreatRouter(app) {
		var _this = this;

		router.get('/index', function () {
				var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
						return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
										switch (_context.prev = _context.next) {
												case 0:
														_context.next = 2;
														return ctx.render('index.html', { title: 'vue' });

												case 2:
												case 'end':
														return _context.stop();
										}
								}
						}, _callee, _this);
				}));

				return function (_x, _x2) {
						return _ref.apply(this, arguments);
				};
		}());
		router.get('/news', function () {
				var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
						var items;
						return regeneratorRuntime.wrap(function _callee2$(_context2) {
								while (1) {
										switch (_context2.prev = _context2.next) {
												case 0:
														_context2.next = 2;
														return (0, _getNews2.default)();

												case 2:
														items = _context2.sent;

														ctx.body = { data: items };

												case 4:
												case 'end':
														return _context2.stop();
										}
								}
						}, _callee2, _this);
				}));

				return function (_x3, _x4) {
						return _ref2.apply(this, arguments);
				};
		}());

		router.get('/policy/:type/:num/:offset', function () {
				var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
						var params, data;
						return regeneratorRuntime.wrap(function _callee3$(_context3) {
								while (1) {
										switch (_context3.prev = _context3.next) {
												case 0:
														params = ctx.params;
														_context3.next = 3;
														return PolicyModel.SearchAll('tb_policy', params.type, params.num, params.offset);

												case 3:
														data = _context3.sent;

														ctx.body = { data: data };

												case 5:
												case 'end':
														return _context3.stop();
										}
								}
						}, _callee3, _this);
				}));

				return function (_x5, _x6) {
						return _ref3.apply(this, arguments);
				};
		}());
		//app.use(jsonBody({ limit: '10kb' }));
		router.post('/form', body, function () {
				var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
						var DeclareModel;
						return regeneratorRuntime.wrap(function _callee4$(_context4) {
								while (1) {
										switch (_context4.prev = _context4.next) {
												case 0:
														console.log(ctx.request.body.firstParam);
														DeclareModel = new _DeclareModel2.default();

														DeclareModel.addItem('tb_declare', ctx.request.body);

												case 3:
												case 'end':
														return _context4.stop();
										}
								}
						}, _callee4, _this);
				}));

				return function (_x7, _x8) {
						return _ref4.apply(this, arguments);
				};
		}());
		app.use(router.routes()).use(router.allowedMethods());
}
module.exports = CreatRouter;