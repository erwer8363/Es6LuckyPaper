{
    let obj = {
        time:'2018-05-18',
        name:'es6',
        _r:123
    }

    let monitor = new Proxy(obj,{
        get(target,key){
            return target[key].replace('2018','2019');
        },
        set(target,key,value){
            if(key === 'name'){
                return target[key] = value;
            }else {
                return target[key];
            }
        },
        //拦截 对象的key in object 操作
        has(target,key){
            if(key === 'name'){
                return target[key];
            }else {
                return false;
            }
        },
        // 拦截delete操作
        deleteProperty(target,key){
            if(key[0] === '_'){
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        },
        //Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target,key){
            return Object.keys(target).filter(item=>item!='time');
        }
    });
    console.log(monitor.time);
    monitor.name = 'javascript';
    console.log(monitor);
    console.log('name' in monitor,'time' in monitor);
    delete monitor.name;
    console.log(monitor);
    delete monitor._r;
    console.log(monitor);
}