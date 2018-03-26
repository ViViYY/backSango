const mysql = require('mysql');
let client = undefined;

const query = function (sql, cb) {
    console.log(' query = ' + sql);
    client.getConnection(function (err, connection) {
        if(err){
            console.log(' connection mysql err : ' + err);
            cb(err);
            throw err;
        } else {
            connection.query(sql, function (connerr, result, fileds) {
                if(connerr){
                    console.log(' query err : ' + connerr);
                    cb(connerr);
                } else {
                    cb(null, result);
                }
                connection.release();
            });
        }
    });
};

//  连接数据库
exports.connect = function (config) {
    client = mysql.createPool(config);
};
// 封装数据库插入语句
const insertSql = function (table, data) {
    let sql = ' insert into ' + table;
    let keyStr = ' (';
    let valueStr = 'values (';
    for(let i in data){
        keyStr += i + ',';
        if((typeof data[i]).indexOf('string') == 0){
            valueStr += "'" + data[i] + "',";
        } else {
            valueStr += data[i] + ",";
        }
    }
    keyStr = keyStr.substring(0, keyStr.length - 1);
    keyStr += ') ';
    valueStr = valueStr.substring(0, valueStr.length - 1);
    valueStr += ') ';
    sql += keyStr + valueStr;
    return sql;
};

// 封装数据库更新语句
const updateSql = function (table, mainKey, mainValue, data) {
    let sql = ' update ' + table + ' set ' ;
    for(let i in data){
        if( (typeof data[i]).indexOf('string') == 0 ){
            sql += i + " = '" + data[i] + "',";
        } else {
            sql += i + ' = ' + data[i] + ',';
        }
    }
    sql = sql.substring(0, sql.length - 1);
    if( (typeof mainValue).indexOf('string') == 0){
        sql += ' where ' + mainKey + ' = ' + "'" + mainValue + "'";
    } else {
        sql += ' where ' + mainKey + ' = ' + mainValue;
    }
    return sql;
};
// 查找玩家
exports.checkAccount = function (username, cb) {
    // create table t_account (id int auto_increment primary key, username varchar(20), password varchar(20), nick_name varchar(20), avatar varchar(20), vip int, dead_battle int, dead_starve int ) default character set utf8  ;
    let sql = "select * from t_account where username = '" + username + "';";
    query(sql, function (err, data) {
        if(err){
            console( ' checkPlayer err : ' + err );
        }
        console.log(' checkPlayer data : ' + JSON.stringify(data));
        cb(err, data);
    });
};

// 新建玩家
exports.insertAccount = function (username, password, cb) {
    let sql_account = insertSql('t_account', {username: username, password: password, nick_name: 'player', avatar: 1, vip: 0, dead_battle: 0, dead_starve: 0});
    console.log('insert account sql = ' + sql_account);
    query(sql_account, function (err, res) {
        if(err){
            console.log(" insert account err = " + err);
        }
        console.log(" insert account res =  " + JSON.stringify(res));
        // insert account res =  {"fieldCount":0,"affectedRows":1,"insertId":6,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}
        // 新建庄园数据
        insertManor(res.insertId, function () {
            cb(err, {id: res.insertId, username: username, password: password, nick_name: 'player', avatar: 'guansuo', vip: 0, dead_battle: 0, dead_starve: 0});
        });
    });
    const insertManor = function (uid, cb) {
        // create table t_manor (uid int, idle_craftman int, food int, food_craftman int, wood int, wood_craftman int, iron int, iron_craftman int, crystal int, crystal_craftman int, silver int, silver_craftman int) default charset utf8;
        let sql = insertSql('t_manor', {uid: uid, idle_craftman: 10, food: 0, food_craftman: 0, wood: 0, wood_craftman: 0, iron: 0, iron_craftman: 0, crystal: 0, crystal_craftman: 0, silver: 0, silver_craftman: 0});
        query(sql, function (err, res) {
            if(err){
                console.log(" insert manor err = " + err);
            }
            console.log(" insert manor res =  " + JSON.stringify(res));
        });
        cb();
    };
};

// 获取庄园数据
exports.getManorData = function (uid, cb) {
    let sql = "select * from t_manor where uid = '" + uid + "';";
    query(sql, function (err, data) {
        if(err){
            console( ' getManorData err : ' + err );
        }
        console.log(' getManorData data : ' + JSON.stringify(data));
        cb(err, data);
    });
};