
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
        },
    },

    onLoad () {

    },

    //  点击事件-仓库
    onButtonClickStoreHouse (event, customData) {
        console.log(' onButtonClickStoreHouse click, customData : ' + customData);

    },
    //  点击事件-酒馆
    onButtonClickTavern (event, customData) {
        console.log(' onButtonClickTavern click, customData : ' + customData);

    },
    //  点击事件-庄园
    onButtonClickManor (event, customData) {
        console.log(' onButtonClickManor click, customData : ' + customData);
        let manorNode = cc.instantiate(this.manorNodePrefab);
        manorNode.parent = this.panelLayer;
    },

});
