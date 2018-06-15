{
    let arr = Array.of(1,2,3,4,5,6);
    console.log(arr);

    let emptyArr = Array.of();
    console.log(emptyArr);
}
{
    let p = document.getElementsByTagName('p');
    let pAr = Array.from(p);
    pAr.forEach((value)=>{
        console.log(value.textContent);
    });

    console.log(Array.from([1,2,3,4],(value,index)=>{value=value*2;return [index,value]}))
}
{
    let arr = [1,'a',undefined].fill(7,2);
    console.log(arr);
}
{
    for (let [index,value] of ['1','c','kss'].entries()){
        console.log(index,value);
    }
}
{
    console.log([1,2,3,4,5].copyWithin(0,3));
    console.log([1,2,3,4,5].copyWithin(0,1,3));
}
{
    console.log([1,2,3,4,5].find((value)=>value>3));
    console.log([1,2,3,4,5,NaN].includes(3));
}