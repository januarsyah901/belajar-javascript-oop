class User {
  fristName;
  lastName;
  balance = 0;

  constructor(fristName, lastName) {
    this.fristName = fristName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const akbar = new User("Januarsyah", "Akbar");
console.info(akbar);
