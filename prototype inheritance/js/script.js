// Class
function Employee(name){
    this.name = name;
}

function Manager(name){
    this.name = name;
}

// pewarisan prototype

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function(name){
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function(name){
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}
// object 

const employee = new Employee("Nabil");
employee.sayHello("joko");

const manager = new Manager("Bagus");
manager.sayHello("joko");

console.info(employee);
console.info(manager);