const Global = require('./../../global');

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
        },
    },

    onLoad () {
        this.idleCraftmanNumber.string = '0';
        let dy = 135;
        let foodNode = cc.instantiate(this.manorComponentPrefab);
        foodNode.position = cc.p(0, 300);
        foodNode.parent = this.node;
        let woodNode = cc.instantiate(this.manorComponentPrefab);
        woodNode.position = cc.p(foodNode.position.x, foodNode.position.y - dy);
        woodNode.parent = this.node;
        let ironNode = cc.instantiate(this.manorComponentPrefab);
        ironNode.position = cc.p(foodNode.position.x, woodNode.position.y - dy);
        ironNode.parent = this.node;
        let crystalNode = cc.instantiate(this.manorComponentPrefab);
        crystalNode.position = cc.p(foodNode.position.x, ironNode.position.y - dy);
        crystalNode.parent = this.node;
        let silverNode = cc.instantiate(this.manorComponentPrefab);
        silverNode.position = cc.p(foodNode.position.x, crystalNode.position.y - dy);
        silverNode.parent = this.node;
        this.materialList.push(foodNode);
        this.materialList.push(woodNode);
        this.materialList.push(ironNode);
        this.materialList.push(crystalNode);
        this.materialList.push(silverNode);
        this.refresh();
    },

    refresh () {
        console.log('manor panel refresh');
        this.materialList[0].getComponent('manorComponent').refresh(defines.MANOR_TYPE_FOOD);
        this.materialList[1].getComponent('manorComponent').refresh(defines.MANOR_TYPE_WOOD);
        this.materialList[2].getComponent('manorComponent').refresh(defines.MANOR_TYPE_IRON);
        this.materialList[3].getComponent('manorComponent').refresh(defines.MANOR_TYPE_CRYSTAL);
        this.materialList[4].getComponent('manorComponent').refresh(defines.MANOR_TYPE_SILVER);
    },

    onButtonClose (event, customData) {
        console.log(' manor node close : ' + customData);
        this.node.destroy();
    },
    onButtonRecruit (event, customData) {
        console.log(' manor node recruit : ' + customData);

    },

});
