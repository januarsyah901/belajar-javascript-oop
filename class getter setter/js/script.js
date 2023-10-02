class User {
    constructor(fristName,lastName){
        this.fristName = fristName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.fristName} ${this.lastName}`;
    }

    set fullName(value){
        const result = value.split(" ");
        this.fristName = result[0];
        this.lastName = result[1]; 
    }
}

const akbar = new User("Januarsyah", "Akbar");
console.info(akbar.fullName);