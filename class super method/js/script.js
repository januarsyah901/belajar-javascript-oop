// Class

class Employee {
    constructor(firstName)
    {
        this.firstName = firstName;
    }
    sayHello(name)
    {
        console.info(`Hello ${name}, my name is employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName)
    {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name)
    {
        console.info(`Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`);
    }
}

// Obejct

const akbar = new Employee("Bagus");
akbar.sayHello("Nabil");

const gipar = new Manager("Januarsyah","akbar");
gipar.sayHello("Gipar");