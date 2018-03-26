const mydb = require('./../unit/mydb');

const Player = function (socket, callbackIndex, accountData) {
    that = {};
    let _socket = socket;
    let _uid = accountData.id;

    const notify = function (msg, index, data) {
        console.log(' player notify to client : msg = ' + msg + ', callbackIndex = ' + index + ',data = ' + JSON.stringify(data));
        _socket.emit('notify', {msg: msg, callbackIndex: index, data: {data: data}});
    };
    _socket.on('disconnect', function () {
        console.log(' player ' + '' + ' disconnect ');
    });
    // 获取庄园数据
    mydb.getManorData(_uid, function (err, data) {
        // 确认登陆成功
        notify('enterGame', callbackIndex, {accountData:accountData, manorData: data[0]});
    });



    return that;
};
let _playerList = [];
exports.createPlayer = function (socket, index, data) {
    let player = Player(socket, index, data);
    _playerList.push(player);
};