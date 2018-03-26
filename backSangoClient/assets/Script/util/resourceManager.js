const ResourceManager = function () {
    let that = {};
    that.resources = {};
    const load = function (path, cb) {
        cc.loader.loadRes(path, function (err, res) {
            if(err){
                console.log(' ResourceManager load res err : ' + err + ', path = ' + path);
            } else {
                cb(path, res);
            }
        });
    };
    that.loadList = function (pathList, cb) {
        let _loadCount = 0;
        const loadCb = function (path, res) {
            that.resources[path] = res;
            _loadCount++;
            if(_loadCount == pathList.length){
                console.log(' ResourceManager load res end, count : ' + _loadCount);
                if(cb){
                    cb();
                }
            }
        };
        for (let i = 0; i < pathList.length; i++){
            load(pathList[i], loadCb);
        }
    };
    return that;
};
export default ResourceManager;