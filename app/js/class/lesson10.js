{
    let fun = function* () {
        yield 10;
        yield 20;
        return 30;
    }
    let k = fun();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}
{
    let obj = {};
    obj[Symbol.iterator]=function* () {
        yield 1;
        yield 2;
        yield 3;
    }
    for (let val of obj){
        console.log(val);
    }
}
{
    function draw(count) {
        console.log(`剩余${count}次`);
    }

    let residue = function* (count) {
        while(count > 0){
            yield draw(count);
            count--;
        }
    }

    let start = residue(5);
    let btn = document.createElement('button');
    btn.id = 'btn';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    btn.addEventListener('click',()=>{
        let isdone = start.next().done;
        btn.disabled = isdone;
        console.log('sssss',isdone);
    },false);
}
{
    let ajax = function* () {
        yield new Promise((res,rej)=>{
            setTimeout(()=>{
                res({code:0});
            },2000);
        })
    }

    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function (d) {
            if(d.code !=0){
                setTimeout(()=>{
                    console.log('wait...');
                    pull();
                },1000);
            }else {
                console.log(d);
            }
        })
    }
}
{
    async function f() {
        await 3;
        await 4;
        await 5;
        return 6;
    }
    // fun().then(res=>{
    //     console.log(res);
    // })
    let k = f();
    console.log(k.next);
    console.log(k.next);
    console.log(k.next);
}