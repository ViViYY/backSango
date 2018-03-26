import EventListener from './eventListener'

const socketController = function () {
    let that = {};
    let _socket = null;
    let _event = EventListener({});
    let _callbackIndex = 1;
    let _callbackMap = {};

    that.init = function () {
        _socket = io(defines.serverUrl);
        _socket.on('welcome', function (data) {
            console.log('welcome msg : ' + data.data);
        });
        _socket.on('notify', function (data) {
            console.log(' get server notify : ' + JSON.stringify(data));
            let msg = data.msg;
            _event.fire(msg, data.data);
            let callbackIndex = data.callbackIndex;
            if(callbackIndex){
                let cb = _callbackMap[callbackIndex];
                if(cb){
                   if(data.data.err){
                       cb(data.data.err);
                   } else {
                       cb(null, data.data);
                   }
                }
            }
        });
    };
    // 无回掉消息
    const notify = function (msg, data) {
        console.log(' notify to server msg = ' + msg + ', callbackIndex =  ' + _callbackIndex + ' , data =  ' + JSON.stringify(data));
        _socket.emit('notify', {msg: msg, callbackIndex: _callbackIndex, data: data});
        _callbackIndex++;
    };
    // 发送消息，等待回掉
    const request = function (msg, data, cb) {
        _callbackMap[_callbackIndex] = cb;
        notify(msg, data);
    };
    // 登陆
    that.login = function (data, cb) {
        request('login', data, cb);
    };
    // 注册并登陆
    that.registerAndLogin = function (data, cb) {
        request('registerAndLogin', data, cb);
    };
    // 进入游戏
    that.onEnterGame = function (cb) {
        _event.on('enterGame', cb);
    };

    return that;
};
export default socketController;