'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolicyModel = function () {
	function PolicyModel() {
		_classCallCheck(this, PolicyModel);
	}

	_createClass(PolicyModel, [{
		key: 'SearchAll',
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(table, type, num, starts) {
				var sql, data;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								sql = 'SELECT * FROM ' + table + ' where type=' + type + ' limit ' + num + ' OFFSET ' + starts;
								_context.next = 3;
								return _connect2.default.query(sql).spread(function (rows) {
									return rows;
								});

							case 3:
								data = _context.sent;
								return _context.abrupt('return', data);

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function SearchAll(_x, _x2, _x3, _x4) {
				return _ref.apply(this, arguments);
			}

			return SearchAll;
		}()
	}]);

	return PolicyModel;
}();

exports.default = PolicyModel;