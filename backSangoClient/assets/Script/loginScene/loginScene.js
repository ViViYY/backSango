import Global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
        anim1: {
            default: null,
            type: cc.Animation
        },
        prefabRegisterNode: {
            default: null,
            type: cc.Prefab
        },
        usernameLabel: {
            default: null,
            type: cc.EditBox
        },
        passwordLabel: {
            default: null,
            type: cc.EditBox
        },
        tipsLabel: {
            default: null,
            type: cc.Label
        },
    },
    onLoad () {
        this.anim1.play('welcome');
        let gameConfig = defines.gameConfig;
        this.usernameLabel.string = 'qxw19861';
        this.passwordLabel.string = '12341234';
        // console.log('gameConfig : ' + JSON.stringify(gameConfig));
        let _resList = [];
        for (let i in gameConfig){
            _resList.push(gameConfig[i]);
        }
        Global.GameData.ResourceManager.loadList(_resList, function () {
            console.log(' resource : ' + JSON.stringify(Global.GameData.ResourceManager));
            Global.socket.init();
        });
        Global.socket.onEnterGame((data)=> {
            // 登陆回掉
            console.log(' on login game data : ');
            let accountData = data.data.accountData;
            let manorData = data.data.manorData;
            console.log(' account data : ' + JSON.stringify(accountData));
            console.log(' manor data : ' + JSON.stringify(manorData));
            Global.GameData.setAccountData(accountData);
            cc.director.loadScene('gameScene');
        });
    },
    onButtonLogin (event, customData) {
        console.log('loginScene:onButtonLogin , customData = ' + customData);
        let username = this.usernameLabel.string;
        let password = this.passwordLabel.string;
        if(username.length < 3){
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 3 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        if(password.length < 6){
            this.tipsLabel.node.opacity = 255;
            this.tipsLabel.string = "username length must big than 6 ";
            this.tipsLabel.node.runAction(cc.fadeOut(3));
            return;
        }
        Global.socket.login({username: username, password: password}, (err, data)=> {
            if(err){
                console.log(' login err : ' + err);
                this.tipsLabel.node.opacity = 255;
                this.tipsLabel.string = err;
                this.tipsLabel.node.runAction(cc.fadeOut(3));
            } else {
                // console.log(' login data : ' + JSON.stringify(data));
            }
        });
    },
    onButtonRegister (event, customData) {
        console.log('loginScene:onButtonRegister , customData = ' + customData);
        let registerNode = cc.instantiate(this.prefabRegisterNode);
        registerNode.parent = this.node;
    },

});
