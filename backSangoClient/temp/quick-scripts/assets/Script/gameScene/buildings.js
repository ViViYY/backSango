(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameScene/buildings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'af045uSQZhGV5+eChCadfuC', 'buildings', __filename);
// Script/gameScene/buildings.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        manorNodePrefab: {
            default: null,
            type: cc.Prefab
        },
        panelLayer: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {},


    //  点击事件-仓库
    onButtonClickStoreHouse: function onButtonClickStoreHouse(event, customData) {
        console.log(' onButtonClickStoreHouse click, customData : ' + customData);
    },

    //  点击事件-酒馆
    onButtonClickTavern: function onButtonClickTavern(event, customData) {
        console.log(' onButtonClickTavern click, customData : ' + customData);
    },

    //  点击事件-庄园
    onButtonClickManor: function onButtonClickManor(event, customData) {
        console.log(' onButtonClickManor click, customData : ' + customData);
        var manorNode = cc.instantiate(this.manorNodePrefab);
        manorNode.parent = this.panelLayer;
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
        //# sourceMappingURL=buildings.js.map
        