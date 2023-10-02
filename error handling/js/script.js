class MathFun{
    static kali(...numbers){
        if (numbers.length === 0) {
            throw new Error("Total parameter harus lebih dari nol!")
        }
        let angka = 1;
        for(const number of numbers){
            angka *= number;
        }
        return angka;
    }
}

try {
    const angka = MathFun.kali();
    console.info(angka);
} catch (error) {
    console.info(`terjadi error. ${error.message}`);
} finally {
    console.info("program selesai");
}
console.info("januarsyah");

class Counter{
    #counter = 0;
    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++;
        }
    }
}
const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());



