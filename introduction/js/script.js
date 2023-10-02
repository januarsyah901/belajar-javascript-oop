// Class
function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.info(`Hello ${name}, gimana kabarnya?, namaku ${firstName}`); 
    }
}

// Object
const akbar = new Person('januarsyah','akbar');
akbar.sayHello("akbar")
const nabil = new Person('nabil', 'fikry');
akbar.sayHello("ain")

console.log(akbar);
console.log(nabil);