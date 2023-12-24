// 1.Creează o funcție care returnează valoarea 10

const valoare = () => {
  return 10;
};

console.log(valoare());

//2.Creează o funcție care are o variabila definita local ‘numeleMeu’ și returnează numărul ei de caractere

const numarCaractere = () => {
  const numeleMeu = "Bogdanovici";
  return numeleMeu.length;
};
console.log(numarCaractere());

//3.Creează o funcție care are 2 variabile definite local a și b și returnează suma lor

const sumaNumerelor = () => {
  const a = 6;
  const b = 6;
  return a + b;
};

console.log(sumaNumerelor());

//4.Sa se creeze o functie care primeste trei parametrii ( d, e și f ) si returneaza produsul lor

const produsulNumerelor = (d, e, f) => {
  return d * e * f;
};

console.log(produsulNumerelor(3, 4, 5));

//5.Sa se creeze o functie care primeste un parametru ( x ) si returneaza diferența lui cu 10.
//De exemplu dacă x = 16, funcția sa returneze 6

const difernetaX = (x) => {
  return x - 10;
};

console.log(difernetaX(8));

//6.Sa se creeze o functie care primeste un parametru ( a ) si returneaza opusul lui.
//De exemplu dacă a este 7 funcția sa returneze -7.

const opusul = (a) => {
  return -1 * a;
};
console.log(opusul(145));

//7.Sa se creeze o functie care primeste doi parametrii ( x si y ) si returneaza impartirea lor

const impartire = (x, y) => {
  return x / y;
};
console.log(impartire(15, 5));

//8.Sa se creeze o functie care primeste un parametru ( notaMea ) si returneaza “Promovat” dacă
//valoarea parametrului este peste 5 ( inclusiv ), în caz contrar returnează “Picat”

const verificarePromovare = (notaMea) => {
  let status;
  if (notaMea >= 5) {
    status = "Promovat";
  } else {
    status = "Picat";
  }
  return status;
};

console.log(verificarePromovare(5));

//9.Sa se creeze o funcție care primeste doi parametrii ( a si b ) și
// daca diferența lor ( a - b ) este mai mare decât 10, atunci sa returneze true, altfel false.

const statusDiferenta = (a, b) => {
  let status;
  status = a - b > 10 ? "true" : "false";
  return status;
};

console.log(statusDiferenta(10, 9));

//10.Sa se creeze o funcție care primeste doi parametrii ( a si b ) și
//dacă cele doua numere sunt egale sa se returneze true, altfel false.

//11.Sa se creeze o funcție care primeste doi parametrii ( a si b ) și
//returnează maximul. De exemplu, dacă a = 7, b = 5, funcția va returna 5

//12.Sa se creeze o funcție care primeste doi parametrii ( a si b ) și returnează minimul

//13.Sa se creeze o funcție care primeste doi parametrii ( a si b ) și
//dacă diferența lor ( a - b ) este mai mare decât 10, atunci sa returneze true, altfel false.

//14.Sa se creeze o funcție care are un parametru ( numeleMeu ) reprezentând un string.
//Funcția sa afișeze în consola “Numele meu are “ + numărul de caractere al numelui + “ caractere “.

//15.Sa se creeze o functie care are 2 parametrii ( numeleMeu, varstaMea ) reprezentand 2
//un string și un număr. Functia sa afiseze in consola un string construit din cele 2
//parametrii ca în exemplu: Dacă funcția este apelată cu argumentele “Andrei” și 30,
//funcția sa afișeze în consola “Numele meu este Andrei și am 30 de ani”.
