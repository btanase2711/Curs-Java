const mesaj = document.getElementById("mesaj");
const mesaj2 = document.getElementById("mesaj2");

function renderMesaj(msg) {
    mesaj.textContent = msg;
}

function renderMesaj2(msg2) {
    mesaj2.textContent = msg2;
}

let msg = "";

class Masina {
    constructor (marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    get proprietati() {
        msg = `${this.marca}, ${this.model}, ${this.culoare}, ${this.kilometraj}`;
        return msg;
        // renderMesaj(msg);
    }

}

function main () {
    let car1 = new Masina ('Seat','Leon','gri','120 000');
    let car2 = new Masina ('BMW','120','albastru','140 000');
    let car3 = new Masina ('Dacia','Duster','negru','60 000');

    console.log (car1.proprietati);
    console.log (car2.proprietati);
    console.log (car3.proprietati);

    msg = `${car1.proprietati}   ${car2.proprietati}  ${car3.proprietati}`;

    renderMesaj(msg);
}

main ();

let msg2 ="";

class MasinaDeCurse extends Masina {
    constructor (marca, model, culoare, kilometraj) {
        super (marca, model, culoare, kilometraj);
    }

    participaLaCampionat (pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log (`Ai castigat locul ${pozitiaInCampionat}`);
            msg2 = `Ai castigat locul ${pozitiaInCampionat}`
        } 
        else {
            console.log (`Nu ai castigat nici un premiu`);
            msg2 = `Nu ai castigat nici un premiu`
        }

        renderMesaj(msg2);
    }

}

function main2 () {
    let car4 = new MasinaDeCurse ('Subaru','Impreza','rosu','120 000');
    let car5 = new MasinaDeCurse ('Porche','911','negru','140 000');
    
    car4.participaLaCampionat(2);
    console.log(car4.proprietati);
    car5.participaLaCampionat(-1);
    console.log(car5.proprietati);

    msg2 = car4.participaLaCampionat(2);
}

// car1.participaLaCampionat(1);
// console.log(car1.proprietati);

main2 ();


