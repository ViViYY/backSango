"use strict";
cc._RF.push(module, '9ad433HBYlLMpcnd42d07yP', 'loginScene');
// Script/loginScene/loginScene.js

'use strict';

var _global = require('./../global');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        anim1: {
            default: null,
            type: cc.Animation
        },
        prefabRegisterNode: {
            default: null,
            type: cc.Prefab
        },
        usernameLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordLabel: {
            default: null,
            type: cc.EditBox
        },
        tipsLabel: {
            default: null,
            type: cc.Label
        }
    },
    onLoad: function onLoad() {
        this.anim1.play('welcome');
        var gameConfig = defines.gameConfig;
        this.usernameLabel.string = 'qxw19861';
        this.passwordLabel.string = '12341234';
        // console.log('gameConfig : ' + JSON.stringify(gameConfig));
        var _resList = [];
        for (var i in gameConfig) {
            _resList.push(gameConfig[i]);
        }
        _global2.default.GameData.ResourceManager.loadList(_resList, function () {
            console.log(' resource : ' + JSON.stringify(_global2.default.GameData.ResourceManager));
            _global2.default.socket.init();
        });
        _global2.default.socket.onEnterGame(function (data) {
            // 登陆回掉
            console.log(' on login game data : ');
            var accountData = data.data.accountData;
            var manorData = data.data.manorData;
            console.log(' account data : ' + JSON.stringify(accountData));
            console.log(' manor data : ' + JSON.stringify(manorData));
            _global2.default.GameData.setAccountData(accountData);
            cc.director.loadScene('gameScene');
        });
    },
    onButtonLogin: function onButtonLogin(event, customData) {
        var _this = this;

        console.log('loginScene:onButtonLogin , customData = ' + customData);
        var username = this.usernameLabel.string;
        var password = this.passwordLabel.string;
        if (username.length < 3) {
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 3 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if (password.length < 6) {
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 6 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        _global2.default.socket.login({ username: username, password: password }, function (err, data) {
            if (err) {
                console.log(' login err : ' + err);
                _this.tipsLabel.node.opacity = 255;
                _this.tipsLabel.string = err;
                _this.tipsLabel.node.runAction(cc.fadeOut(3));
            } else {
                // console.log(' login data : ' + JSON.stringify(data));
            }
        });
    },
    onButtonRegister: function onButtonRegister(event, customData) {
        console.log('loginScene:onButtonRegister , customData = ' + customData);
        var registerNode = cc.instantiate(this.prefabRegisterNode);
        registerNode.parent = this.node;
    }
});

cc._RF.pop();