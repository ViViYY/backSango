"use strict";
cc._RF.push(module, 'af045uSQZhGV5+eChCadfuC', 'buildings');
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