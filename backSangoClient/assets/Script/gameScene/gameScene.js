
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
        },

    },

    onLoad () {
        // cc.loader.loadRes('ui/icon/btn_back_1', (err, tex)=> {
        //     if(err){
        //         console.log(' loadRes err = ' + err);
        //     }
        //     console.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
        //     this.headNode.spriteFrame = new cc.SpriteFrame(tex);
        // });
        this.headNode.spriteFrame = this.myAtlas.getSpriteFrame('gaoding');

        this.bg.on(cc.Node.EventType.TOUCH_MOVE, (event)=> {
            var delta = event.touch.getDelta();
            let new_x = this.bg.position.x + delta.x;
            if(new_x > this.bg.width / 2 - cc.director.getVisibleSize().width / 2){
                new_x = this.bg.width / 2 - cc.director.getVisibleSize().width / 2;
            }
            if(new_x < cc.director.getVisibleSize().width / 2 - this.bg.width / 2){
                new_x = cc.director.getVisibleSize().width / 2 - this.bg.width / 2;
            }
            let new_y = this.bg.position.y + delta.y;
            if(new_y > this.bg.height / 2 - cc.director.getVisibleSize().height / 2){
                new_y = this.bg.height / 2 - cc.director.getVisibleSize().height / 2;
            }
            if(new_y < cc.director.getVisibleSize().height / 2 - this.bg.height / 2){
                new_y = cc.director.getVisibleSize().height / 2 - this.bg.height / 2;
            }
            this.bg.position = cc.p(new_x, new_y);
        }, this.bg);
    },

    start () {

    },

    update (dt) {

    },
});
