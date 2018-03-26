(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameScene/gameScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c48c0jGYFKKJhEHyffWGeV', 'gameScene', __filename);
// Script/gameScene/gameScene.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        bg: {
            default: null,
            type: cc.Node
        },
        headNode: {
            default: null,
            type: cc.Sprite
        },
        myAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        panelLayer: {
            default: null,
            type: cc.Node
        }

    },

    onLoad: function onLoad() {
        var _this = this;

        // cc.loader.loadRes('ui/icon/btn_back_1', (err, tex)=> {
        //     if(err){
        //         console.log(' loadRes err = ' + err);
        //     }
        //     console.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
        //     this.headNode.spriteFrame = new cc.SpriteFrame(tex);
        // });
        this.headNode.spriteFrame = this.myAtlas.getSpriteFrame('gaoding');

        this.bg.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta();
            var new_x = _this.bg.position.x + delta.x;
            if (new_x > _this.bg.width / 2 - cc.director.getVisibleSize().width / 2) {
                new_x = _this.bg.width / 2 - cc.director.getVisibleSize().width / 2;
            }
            if (new_x < cc.director.getVisibleSize().width / 2 - _this.bg.width / 2) {
                new_x = cc.director.getVisibleSize().width / 2 - _this.bg.width / 2;
            }
            var new_y = _this.bg.position.y + delta.y;
            if (new_y > _this.bg.height / 2 - cc.director.getVisibleSize().height / 2) {
                new_y = _this.bg.height / 2 - cc.director.getVisibleSize().height / 2;
            }
            if (new_y < cc.director.getVisibleSize().height / 2 - _this.bg.height / 2) {
                new_y = cc.director.getVisibleSize().height / 2 - _this.bg.height / 2;
            }
            _this.bg.position = cc.p(new_x, new_y);
        }, this.bg);
    },
    start: function start() {},
    update: function update(dt) {}
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
        //# sourceMappingURL=gameScene.js.map
        