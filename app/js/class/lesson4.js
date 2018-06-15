{
    console.log('a','\u0061');
    console.log('s','\u28BB7');

    console.log('s','\u{28BB7}');
}
{
    let str = 'string';
    console.log(str.includes('s'));
    console.log(str.startsWith('s'));
    console.log(str.endsWith('8'));
}
{
    //todo 字符串格式化
    console.log('1'.padStart(3,'0'));
    console.log('1'.padEnd(3,'#'));
    let strArr = ['1','2','3','4','55','66'];
    for(let str of strArr){
        console.log(str.padStart(2,'0'));
    }
}
{
    let user={
        name:'list',
        info:'hello world'
    }
    console.log(abc`i am ${user.name},${user.info}`);

    function abc(s, v1, v2) {
        return s+v1+v2;
    }
}