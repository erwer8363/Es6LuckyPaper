// export let A = 123;
//
// export function test() {
//     console.log('test');
// }
//
// export class Hello {
//     sayHello(){
//         console.log('sayHello');
//     }
// }
let A = 123;
function test() {
    console.log('test');
}
class Hello {
    sayHello(){
        console.log('sayHello');
    }
}

export default {
    A,
    test,
    Hello
}