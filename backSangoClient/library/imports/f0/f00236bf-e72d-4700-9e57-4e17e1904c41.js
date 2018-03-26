"use strict";
cc._RF.push(module, 'f0023a/5y1HAJ5XThfhkExB', 'gameData');
// Script/gamedata/gameData.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resourceManager = require('./../util/resourceManager');

var _resourceManager2 = _interopRequireDefault(_resourceManager);

var _playerData = require('./playerData');

var _playerData2 = _interopRequireDefault(_playerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameData = function GameData() {
    var that = {};
    that.ResourceManager = (0, _resourceManager2.default)();
    that.PlayerData = (0, _playerData2.default)();
    // 设置账号数据
    that.setAccountData = function (accountData) {
        that.PlayerData.uid = accountData.id;
        that.PlayerData.nickname = accountData.nick_name;
        that.PlayerData.avatar = accountData.avatar;
        that.PlayerData.vip = accountData.vip;
        that.PlayerData.deadBattle = accountData.dead_battle;
        that.PlayerData.deadStarve = accountData.dead_starve;
    };

    return that;
};

exports.default = GameData;
module.exports = exports['default'];

cc._RF.pop();