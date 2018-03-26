(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameScene/manor/manorNode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '29d088A9INMoLuOU2W13zH+', 'manorNode', __filename);
// Script/gameScene/manor/manorNode.js

'use strict';

var Global = require('./../../global');

cc.Class({
    extends: cc.Component,

    properties: {
        idleCraftmanNumber: {
            default: null,
            type: cc.Label
        },
        materialList: {
            default: [],
            type: cc.Node
        },
        manorComponentPrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad: function onLoad() {
        this.idleCraftmanNumber.string = '0';
        var dy = 135;
        var foodNode = cc.instantiate(this.manorComponentPrefab);
        foodNode.position = cc.p(0, 300);
        foodNode.parent = this.node;
        var woodNode = cc.instantiate(this.manorComponentPrefab);
        woodNode.position = cc.p(foodNode.position.x, foodNode.position.y - dy);
        woodNode.parent = this.node;
        var ironNode = cc.instantiate(this.manorComponentPrefab);
        ironNode.position = cc.p(foodNode.position.x, woodNode.position.y - dy);
        ironNode.parent = this.node;
        var crystalNode = cc.instantiate(this.manorComponentPrefab);
        crystalNode.position = cc.p(foodNode.position.x, ironNode.position.y - dy);
        crystalNode.parent = this.node;
        var silverNode = cc.instantiate(this.manorComponentPrefab);
        silverNode.position = cc.p(foodNode.position.x, crystalNode.position.y - dy);
        silverNode.parent = this.node;
        this.materialList.push(foodNode);
        this.materialList.push(woodNode);
        this.materialList.push(ironNode);
        this.materialList.push(crystalNode);
        this.materialList.push(silverNode);
        this.refresh();
    },
    refresh: function refresh() {
        console.log('manor panel refresh');
        this.materialList[0].getComponent('manorComponent').refresh(defines.MANOR_TYPE_FOOD);
        this.materialList[1].getComponent('manorComponent').refresh(defines.MANOR_TYPE_WOOD);
        this.materialList[2].getComponent('manorComponent').refresh(defines.MANOR_TYPE_IRON);
        this.materialList[3].getComponent('manorComponent').refresh(defines.MANOR_TYPE_CRYSTAL);
        this.materialList[4].getComponent('manorComponent').refresh(defines.MANOR_TYPE_SILVER);
    },
    onButtonClose: function onButtonClose(event, customData) {
        console.log(' manor node close : ' + customData);
        this.node.destroy();
    },
    onButtonRecruit: function onButtonRecruit(event, customData) {
        console.log(' manor node recruit : ' + customData);
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
        //# sourceMappingURL=manorNode.js.map
        