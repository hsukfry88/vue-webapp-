'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var searchNews = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						data = _connect2.default.query('SELECT tb_policy.title,tb_announcement.startdate,tb_announcement.enddate,tb_announcement.conditions FROM tb_announcement LEFT JOIN tb_policy ON tb_policy.id=tb_announcement.policyid').spread(function (rows) {
							return rows;
						});
						return _context.abrupt('return', data);

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function searchNews() {
		return _ref.apply(this, arguments);
	};
}();

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           FROM Persons
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           LEFT JOIN Orders
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ON Persons.Id_P=Orders.Id_P
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ORDER BY Persons.LastName
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */


exports.default = searchNews;