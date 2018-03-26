"use strict";
cc._RF.push(module, 'cf203WJ21dBuoaE0/gx1ABB', 'global');
// Script/global.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socketController = require('./util/socketController');

var _socketController2 = _interopRequireDefault(_socketController);

var _gameData = require('./gamedata/gameData');

var _gameData2 = _interopRequireDefault(_gameData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Global = {};
Global.socket = (0, _socketController2.default)();
Global.GameData = (0, _gameData2.default)();
exports.default = Global;
module.exports = exports['default'];

cc._RF.pop();