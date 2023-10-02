class Hello {
#sayWithName(name){
    console.info(`Hello, ${name}`); 
}
#sayWithoutName(){
    console.info('Hello'); 
}
  say(name){
    if(name){
        this.#sayWithName(name);
    }else{
        this.#sayWithoutName();
    }
  }
}

const akbar = new Hello();
akbar.say("Akbar"); // output: "Hello Akbar"
akbar.say();
