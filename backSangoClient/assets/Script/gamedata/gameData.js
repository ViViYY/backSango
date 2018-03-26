import ResourceManager from './../util/resourceManager'
import PlayerData from './playerData'

const GameData = function () {
    let that = {};
    that.ResourceManager = ResourceManager();
    that.PlayerData = PlayerData();
    // 设置账号数据
    that.setAccountData = function (accountData) {
        that.PlayerData.uid = accountData.id;
        that.PlayerData.nickname = accountData.nick_name;
        that.PlayerData.avatar = accountData.avatar;
        that.PlayerData.vip = accountData.vip;
        that.PlayerData.deadBattle = accountData.dead_battle;
        that.PlayerData.deadStarve = accountData.dead_starve;
    };

    return that;
};

export default GameData;