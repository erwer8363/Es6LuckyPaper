{
    let a,b;
    [a,b] = [1,2];
    console.log(a,b);
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);
}
{
    let a,b;
    ({a,b} = {a:1,b:2});
    console.log(a,b);
}
{
    let a,b;
    function fun() {
        return[1,2];
    }
    [a,b] = fun();
    console.log(a,b);
}
{
    let a,b,c;
    [a,b,c=3] = [1,2];
    console.log(a,b,c);
}
{
    let a=30,b=40;
    [a,b] = [b,a];
    console.log(a,b);
}
{
    let a,b;
    [a,,,b] = [1,2,3,4];
    console.log(a,b);
}
{
    let o={p:3,q:true};
    let {p,q} = o;
    console.log(p,q);
}
{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}