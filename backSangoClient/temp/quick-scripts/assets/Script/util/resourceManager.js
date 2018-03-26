(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/util/resourceManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4cd8bMjjs1JzZCudSg9Gzyn', 'resourceManager', __filename);
// Script/util/resourceManager.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ResourceManager = function ResourceManager() {
    var that = {};
    that.resources = {};
    var load = function load(path, cb) {
        cc.loader.loadRes(path, function (err, res) {
            if (err) {
                console.log(' ResourceManager load res err : ' + err + ', path = ' + path);
            } else {
                cb(path, res);
            }
        });
    };
    that.loadList = function (pathList, cb) {
        var _loadCount = 0;
        var loadCb = function loadCb(path, res) {
            that.resources[path] = res;
            _loadCount++;
            if (_loadCount == pathList.length) {
                console.log(' ResourceManager load res end, count : ' + _loadCount);
                if (cb) {
                    cb();
                }
            }
        };
        for (var i = 0; i < pathList.length; i++) {
            load(pathList[i], loadCb);
        }
    };
    return that;
};
exports.default = ResourceManager;
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
        //# sourceMappingURL=resourceManager.js.map
        