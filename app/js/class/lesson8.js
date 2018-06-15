{
    class Parent{
        constructor(name='parent'){
            this.name = name;
        }

        sayHello(){
            console.log(this.name);
        }
    }

    class Child extends Parent{
        constructor(name='child'){
            super(name);
            this.age = 20;
        }

        get childAge(){
            return 'child '+ this.age;
        }

        static sayChildHello(){
            console.log('I am child i will say Hello');
        }

        sayHello(){
            super.sayHello();
            console.log('child '+this.name);
        }
    }
    Child.sayChildHello();

    let child = new Child();
    child.sayHello();
}