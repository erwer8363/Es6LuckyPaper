{
    function sleep(t) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('睡眠时间到'+t);
                resolve(t);
            },t*1000);
            console.log(`开始睡眠，要持续${t}秒`);
        })
    }

    // async function begin() {
    //     let sleeplist = [sleep(5),sleep(10),sleep(4)];
    //     let all = Promise.all(sleeplist).catch(err=>console.log(err));
    //     console.log(all);
    // }
    //
    // begin();

    let ss = async function testSleep() {
        let s1 = await sleep(3);
        let s2 = await sleep(s1 + 4);
        let s3 = await sleep(s2 + 5);
        return s3;
    }
    ss().then(res=>{
        console.log(res);
    })

    let arr = [34,45,32,42];
    if(~arr.indexOf(42)){
        console.log('找到了');
    }
}