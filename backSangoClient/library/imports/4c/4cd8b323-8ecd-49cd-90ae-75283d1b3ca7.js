"use strict";
cc._RF.push(module, '4cd8bMjjs1JzZCudSg9Gzyn', 'resourceManager');
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