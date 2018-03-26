(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cf203WJ21dBuoaE0/gx1ABB', 'global', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=global.js.map
        