class Employee{

}
class Manager extends Employee{

}

const akbar = new Employee;
const nabil = new Manager;

console.info(akbar instanceof Employee);
console.info(akbar instanceof Manager);
console.info(nabil instanceof Employee);
console.info(nabil instanceof Manager);
