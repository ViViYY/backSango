import Global from './../global'

cc.Class({
    extends: cc.Component,

    properties: {
        usernameLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordSureLabel: {
            default: null,
            type: cc.EditBox
        },
        tipsLabel: {
            default: null,
            type: cc.Label
        },
    },

    onLoad () {

    },

    onButtonClose(event, customData){
        console.log('registerPanel:onButtonLogin , customData = ' + customData);
        this.node.destroy();
    },
    onButtonRegisterAndLogin(event, customData){
        console.log('registerPanel:onButtonRegisterAndLogin , customData = ' + customData);
        let username = this.usernameLabel.string;
        let password = this.passwordLabel.string;
        let passwordSure = this.passwordSureLabel.string;
        if(username.length < 3){
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 3 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if(password !== passwordSure){
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "两次输入密码不一致";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if(password.length < 6){
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 6 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        Global.socket.registerAndLogin({username: username, password: password}, (err, data)=> {
            if(err){
                console.log(' login err : ' + err);
                this.tipsLabel.node.opacity = 255;
                this.tipsLabel.string = err;
                this.tipsLabel.node.runAction(cc.fadeOut(3));
            } else {
                // console.log(' register and login data : ' + JSON.stringify(data));
            }
        });
    },
    onButtonCancel(event, customData){
        console.log('registerPanel:onButtonCancel , customData = ' + customData);
        this.node.destroy();
    },


});
