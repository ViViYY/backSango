
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
        },
    },

    onLoad () {
        this.tipsNode.opacity = 0;

    },

    onButtonClick (event, customData) {
        console.log(' manor component click show : ' + this.typeNameLabel.string);
        this.tipsNode.opacity = 255;
        this.tipsNode.scale = 0.2;
        let action1 = cc.sequence(cc.scaleTo(0.15, 1),
            cc.callFunc(()=>{
                let action2 = cc.fadeOut(5);
                this.tipsNode.runAction(action2);
            })
        );
        this.tipsNode.runAction(action1);

    },

    onButtonClickAdd (event, customData) {
        console.log('manor component add: ' + customData + ' - ' + this.typeNameLabel.string);
    },
    onButtonClickReduce (event, customData) {
        console.log('manor component reduce: ' + customData + ' - ' + this.typeNameLabel.string);
    },

    refresh (type, data) {
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
    },

});
