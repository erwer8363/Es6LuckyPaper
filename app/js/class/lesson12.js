{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    class Test{
        @readonly
        time(){
            return '2017-05-20'
        }
    }

    let test = new Test();
    // test.time = function(){
    //     console.log('resetTime');
    // }
    console.log(test.time());
}
{
    let typename = function (target,name,descriptor) {
        target.myName = 'HelloEver';
    }

    @typename
    class Hello{

    }

    console.log(Hello.myName);
    //第三方库修饰器的js库：core-decoritors
}

{
    let log=(type)=>{
        return function (target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value =(...arg)=>{
                src_method.apply(target,arg);//这里是原来的方法先执行
                console.info(`log ${type}`);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.log('this is function show');
        }

        @log('click')
        click(){
            console.log('this is function click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();

}