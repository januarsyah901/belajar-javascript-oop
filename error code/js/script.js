class mathFun{
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

const angka = mathFun.kali();
console.info(angka);

