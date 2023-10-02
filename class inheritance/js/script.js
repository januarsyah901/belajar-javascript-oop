class Kali {
    Hack(){
        console.info("Kali Dir");
    }
}

class Ubuntu extends Kali{
    Hack() {
        super.Hack();
        console.info("Ubuntu Dir")
    }
}

const ubuntu = new Ubuntu();
ubuntu.Hack()