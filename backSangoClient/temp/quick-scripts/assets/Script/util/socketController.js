(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/util/socketController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9e393tYEvtLApZfvb2XFHxd', 'socketController', __filename);
// Script/util/socketController.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventListener = require('./eventListener');

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socketController = function socketController() {
    var that = {};
    var _socket = null;
    var _event = (0, _eventListener2.default)({});
    var _callbackIndex = 1;
    var _callbackMap = {};

    that.init = function () {
        _socket = io(defines.serverUrl);
        _socket.on('welcome', function (data) {
            console.log('welcome msg : ' + data.data);
        });
        _socket.on('notify', function (data) {
            console.log(' get server notify : ' + JSON.stringify(data));
            var msg = data.msg;
            _event.fire(msg, data.data);
            var callbackIndex = data.callbackIndex;
            if (callbackIndex) {
                var cb = _callbackMap[callbackIndex];
                if (cb) {
                    if (data.data.err) {
                        cb(data.data.err);
                    } else {
                        cb(null, data.data);
                    }
                }
            }
        });
    };
    // 无回掉消息
    var notify = function notify(msg, data) {
        console.log(' notify to server msg = ' + msg + ', callbackIndex =  ' + _callbackIndex + ' , data =  ' + JSON.stringify(data));
        _socket.emit('notify', { msg: msg, callbackIndex: _callbackIndex, data: data });
        _callbackIndex++;
    };
    // 发送消息，等待回掉
    var request = function request(msg, data, cb) {
        _callbackMap[_callbackIndex] = cb;
        notify(msg, data);
    };
    // 登陆
    that.login = function (data, cb) {
        request('login', data, cb);
    };
    // 注册并登陆
    that.registerAndLogin = function (data, cb) {
        request('registerAndLogin', data, cb);
    };
    // 进入游戏
    that.onEnterGame = function (cb) {
        _event.on('enterGame', cb);
    };

    return that;
};
exports.default = socketController;
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
        //# sourceMappingURL=socketController.js.map
        