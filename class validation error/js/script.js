class ValidationError extends Error {
    constructor(message, field){
        super(message);
        this.field = field;
    }
}
class MathFun{
    static kali(...numbers){
        if (numbers.length === 0) {
            throw new ValidationError("Total parameter harus lebih dari nol!","numbers")
        }
        let angka = 1;
        for(const number of numbers){
            angka *= number;
        }
        return angka;
    }
}

try {
    console.info(MathFun.kali());
} catch (error) {
    if(error instanceof ValidationError){
        console.info(`terjadi error di field ${error.field}, dengan error ${error.message}`);
    }else{
        console.info(`terjadi error. ${error.message}.`);
    }
} finally {
    console.info("program selesai");
}
console.info("januarsyah");

