{
    let arr = ['abc','def'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}
{
    let obj = {
        start:[1,3,7],
        end:[2,5,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let length = arr.length;
            return{
                next(){
                    if(index < length){
                        return{
                            value:arr[index++],
                            done:false
                        }
                    }else {
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for (let val of obj){
        console.log(val);
    }
}