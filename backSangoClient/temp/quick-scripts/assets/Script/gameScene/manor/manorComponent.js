(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameScene/manor/manorComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1e6f0Hu5IlI5p5VJSjv5+nI', 'manorComponent', __filename);
// Script/gameScene/manor/manorComponent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        iconSprite: {
            default: null,
            type: cc.Sprite
        },
        typeNameLabel: {
            default: null,
            type: cc.Label
        },
        totalNumberLabel: {
            default: null,
            type: cc.Label
        },
        yieldNumberLabel: {
            default: null,
            type: cc.Label
        },
        tipsNode: {
            default: null,
            type: cc.Node
        },
        tipsLabel: {
            default: null,
            type: cc.Label
        },
        craftmanLabel: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        this.tipsNode.opacity = 0;
    },
    onButtonClick: function onButtonClick(event, customData) {
        var _this = this;

        console.log(' manor component click show : ' + this.typeNameLabel.string);
        this.tipsNode.opacity = 255;
        this.tipsNode.scale = 0.2;
        var action1 = cc.sequence(cc.scaleTo(0.15, 1), cc.callFunc(function () {
            var action2 = cc.fadeOut(5);
            _this.tipsNode.runAction(action2);
        }));
        this.tipsNode.runAction(action1);
    },
    onButtonClickAdd: function onButtonClickAdd(event, customData) {
        console.log('manor component add: ' + customData + ' - ' + this.typeNameLabel.string);
    },
    onButtonClickReduce: function onButtonClickReduce(event, customData) {
        console.log('manor component reduce: ' + customData + ' - ' + this.typeNameLabel.string);
    },
    refresh: function refresh(type, data) {
        switch (type) {
            case defines.MANOR_TYPE_FOOD:
                this.typeNameLabel.string = '食物';
                break;
            case defines.MANOR_TYPE_WOOD:
                this.typeNameLabel.string = '木材';
                break;
            case defines.MANOR_TYPE_IRON:
                this.typeNameLabel.string = '铁';
                break;
            case defines.MANOR_TYPE_CRYSTAL:
                this.typeNameLabel.string = '水晶';
                break;
            case defines.MANOR_TYPE_SILVER:
                this.typeNameLabel.string = '秘银';
                break;
            default:
                break;
        }
    }
});

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
        //# sourceMappingURL=manorComponent.js.map
        