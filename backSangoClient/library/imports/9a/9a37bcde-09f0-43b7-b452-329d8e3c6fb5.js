"use strict";
cc._RF.push(module, '9a37bzeCfBDt7RSMp2OPG+1', 'registerNode');
// Script/loginScene/registerNode.js

'use strict';

var _global = require('./../global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        usernameLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordSureLabel: {
            default: null,
            type: cc.EditBox
        },
        tipsLabel: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {},
    onButtonClose: function onButtonClose(event, customData) {
        console.log('registerPanel:onButtonLogin , customData = ' + customData);
        this.node.destroy();
    },
    onButtonRegisterAndLogin: function onButtonRegisterAndLogin(event, customData) {
        var _this = this;

        console.log('registerPanel:onButtonRegisterAndLogin , customData = ' + customData);
        var username = this.usernameLabel.string;
        var password = this.passwordLabel.string;
        var passwordSure = this.passwordSureLabel.string;
        if (username.length < 3) {
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 3 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if (password !== passwordSure) {
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "两次输入密码不一致";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if (password.length < 6) {
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 6 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        _global2.default.socket.registerAndLogin({ username: username, password: password }, function (err, data) {
            if (err) {
                console.log(' login err : ' + err);
                _this.tipsLabel.node.opacity = 255;
                _this.tipsLabel.string = err;
                _this.tipsLabel.node.runAction(cc.fadeOut(3));
            } else {
                // console.log(' register and login data : ' + JSON.stringify(data));
            }
        });
    },
    onButtonCancel: function onButtonCancel(event, customData) {
        console.log('registerPanel:onButtonCancel , customData = ' + customData);
        this.node.destroy();
    }
});

cc._RF.pop();