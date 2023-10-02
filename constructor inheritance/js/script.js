// Class
function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name){
        console.info(`Hello ${name}, gimana kabarnya?, namaku ${firstName}`); 
    }
}

function Manager(firstName,lastName){
    this.lastName = lastName
    Employee.call(this, firstName);
}

// Object

const akbar = new Manager("januarsyah", "akbar" );
console.info(akbar)
