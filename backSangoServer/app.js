const socket = require('socket.io');
const app = socket('3001');
const config = require('./config.json');
const mydb = require('./unit/mydb');
const Player = require('./game/player');

mydb.connect(config.mysqlConfig);

app.on('connect', function (socket) {
    console.log(' a user connected ');
    socket.emit('welcome', {data: 'welcome to backSango,please login'});
    socket.on('notify', function (requestData) {
        console.log(' client notify data = ' + JSON.stringify(requestData));
        let msg = requestData.msg;
        let callbackIndex = requestData.callbackIndex;
        let notifyData = requestData.data;
        switch (msg){
            case 'login':
                console.log('user try to login : ' + JSON.stringify(notifyData));
                mydb.checkAccount(notifyData.username, function (err, data) {
                    if(err){
                        console.log(' login err : ' + err);
                        socket.emit('notify', {msg: 'login', callbackIndex: callbackIndex, data: {err: err}});
                    } else {
                        if(data.length == 0){
                            //  账号不存在
                            socket.emit('notify', {msg: 'login', callbackIndex: callbackIndex, data: {err: '账号不存在'}});
                        } else {
                            //  账号存在
                            let account = data[0];
                            // 检查密码
                            if(account.password !== notifyData.password){
                                socket.emit('notify', {msg: 'login', callbackIndex: callbackIndex, data: {err: '密码不正确'}});
                            } else {
                                Player.createPlayer(socket, callbackIndex, account);
                                // socket.emit('notify', {msg: 'enterGame', callbackIndex: callbackIndex, data: {data: account}});
                            }
                        }
                    }
                });
                //socket.emit('notify', {msg: 'login', callbackIndex: callbackIndex, data: {err: null, data: 'ok!!!!!!'}});
                break;
            case 'registerAndLogin':
                console.log('user try to register and login : ' + JSON.stringify(notifyData));
                mydb.checkAccount(notifyData.username, function (err, data) {
                    if(err){
                        console.log(' registerAndLogin err : ' + err);
                        socket.emit('notify', {msg: 'registerAndLogin', callbackIndex: callbackIndex, data: {err: err}});
                    } else {
                        if(data.length == 0){
                            //  新建账号
                            mydb.insertAccount(notifyData.username, notifyData.password, function (err, data) {
                                if(err){
                                    console.log(' insertAccount err : ' + err);
                                } else {
                                    Player.createPlayer(socket, callbackIndex, data);
                                    // socket.emit('notify', {msg: 'enterGame', callbackIndex: callbackIndex, data: {data: data}});
                                }
                            });
                        } else {
                            //  账号存在
                            socket.emit('notify', {msg: 'registerAndLogin', callbackIndex: callbackIndex, data: {err: '账号已经存在'}});
                        }
                    }
                });
                break;
            default:
                break;
        }
    });
});
console.log('socket listen port 3001');