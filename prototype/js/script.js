// Class
function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.info(`Hello ${name}, gimana kabarnya?, namaku ${firstName}`); 
    }
}

// add Prototype

Person.prototype.sayBye = function () {
    console.info("good Bye");
}
Person.prototype.run = function () {
    console.info(`${this.firstName} are runing this program`);
}

// object

const akbar = new Person("januarsyah","akbar");
akbar.sayBye();
akbar.run();
console.log(akbar);