// Class

class Person {
    constructor(name){
        this.name = name;
    }

    //method
    sayHello(name){
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}
// Object 
const akbar = new Person("januarsyah");
akbar.sayHello("nabil");
console.info(akbar.name);
