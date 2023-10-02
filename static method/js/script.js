class mathFun{
    static kali(...numbers){
        let angka = 1;
        for(const number of numbers){
            angka *= number;
        }
        return angka;
    }
}

const angka = mathFun.kali(1,2,3,4,5);
console.info(angka);

