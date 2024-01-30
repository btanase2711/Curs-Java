/* Creează o funcție care primește ca param un array de numere și returnează primul număr impar mai mare decât 10 */

const primulNumarImpar = (numere) => {
  for (let i = 0; i < numere.length; i++) {
    if (numere[i] > 10 && numere[i] % 2 > 0) {
      return numere[i];
    }
  }
};

console.log(primulNumarImpar([7, 13, 18, 11, 24, 5, 17, 25]));

/* Creează o funcție care primește ca param un array de numere și returnează indexul primului număr pozitiv */

const primulNumarPozitiv = (numerele) => {
  for (let i = 0; i < numerele.length; i++) {
    if (numerele[i] < 0) {
      return i;
    }
  }
};

console.log(primulNumarPozitiv([1, -2, 7, 9, 15, 47, -7, 6]));

/* Creează o funcție care primește ca param un array de numere și returnează numarul elementelor pare */

const numarElementePare = (numere) => {
  let counter = 0;
  for (let i = 0; i < numere.length; i++) {
    if (numere[i] % 2 === 0) {
      counter += 1;
    }
  }

  return counter;
};

console.log(numarElementePare([2, 6, 5, 4, 8, 3, 10]));

/* Creează o funcție care primește ca param un array de numere și returnează numarul aparițiilor lui zero */

const aparitiiZero = (numere) => {
  let count = 0;
  for (i = 0; i < numere.length; i++) {
    if (numere[i] === 0) {
      count += 1;
    }
  }
  return count;
};

console.log(aparitiiZero([4, 5, 7, 0, 3, 0, 78, 0]));

/* Creează o funcție care primește ca param un array de numere și returneaza suma numerelor pozitive */

const sumaNumerelorPozitive = (numere) => {
  let suma = 0;
  for (i = 0; i < numere.length; i++) {
    if (numere[i] > 0) {
      suma = suma + numere[i];
    }
  }
  return suma;
};

console.log(sumaNumerelorPozitive([1, 2, 3, -5, -2, 6, -2, 1]));

/* Creează o funcție care primește ca param un array de numere și returneaza produsul numerelor impare */

const produsulNumerelorImpare = (numere) => {
  let produsul = 1;
  /*   let count = 0 */
  for (i = 0; i < numere.length; i++) {
    if (numere[i] % 2 > 0) {
      produsul *= numere[i];
      /*       count +=1
      if (count===0) {
        return "Nu exista numere impare"
      } */
    }
  }
  return produsul;
};

console.log(produsulNumerelorImpare([2, 4, 6, 8, 10, 7]));

// cum fac sa nu afiseze 1 daca nu exista numere impare in array?

/* Creează o funcție care primește ca param un array de numere și returneaza cel mai mare număr din array */

const celMaiMareNumar = (numere) => {
  let max = numere[0];
  for (i = 0; i < numere.length; i++) {
    if (max < numere[i]) {
      max = numere[i];
    }
  }
  return max;
};

console.log(celMaiMareNumar([1, 2, 3, 5, 7]));

/* Creează o funcție care primește ca param un array de numere și returneaza cel mai mare număr par din array */

const celMaiMareNumarPar = (numere) => {
  let maxPar;
  for (i = 0; i < numere.length; i++) {
    if (maxPar === undefined && numere[i] % 2 === 0) {
      maxPar = numere[i];
    } else if (maxPar < numere[i] && numere[i] % 2 === 0) {
      maxPar = numere[i];
    }
  }
  return maxPar;
};

console.log(celMaiMareNumarPar([37, 5, 4, 36, 9, 12]));

/* Creează o funcție care primește ca param un array de elemente ( diverse tipuri ) și returnează câte 
elemente sunt numere. De exemplu: pentru array-ul [5, ‘Mihai’, true, false, undefined, 10, 9, ‘Hey’] 
sa returneze 3. ( aici probabil te gândești la ceva ce ți am arătat la ultima ședința, însă te încurajez 
sa cauti logic cât mai multe metode ) */

const cateElementeSuntNumere = (elemente) => {
  let count = 0;
  for (i = 0; i < elemente.length; i++) {
    if (elemente[i] % 2 > 0) {
      count += 1;
    }
  }
  return count;
};

console.log(
  cateElementeSuntNumere([
    5,
    7,
    "Spanac",
    "Mihai",
    true,
    false,
    undefined,
    10,
    9,
    "Hey",
  ])
);

// de verificat ce solutie ai aratat la ultima sedinta

/* Creează o funcție care primește ca param o lista de produse din coșul de cumparaturi 
și returneaza totalul cosului. Fiecare produs reprezintă un obiect cu o structura fixa. 
Exemplu: pentru lista de produse de mai jos sa se returneze 298 */

let cos = [
  {
    nume: "Gel de dus",
    pret: 29,
    canitate: 2,
  },
  {
    nume: "Sampon",
    pret: 35,
    canitate: 1,
  },
  {
    nume: "Scrub",
    pret: 119,
    canitate: 1,
  },
  {
    nume: "Burete corp",
    pret: 12,
    canitate: 3,
  },
  {
    nume: "Ratuste",
    pret: 5,
    canitate: 10,
  },
];

console.log(cos[4].nume);

const totalSumaCos = (cos) => {
  let sumaCos = 0;
  for (i = 0; i < cos.length; i++) {
    sumaCos += cos[i].pret * cos[i].canitate;
  }
  return sumaCos;
};

console.log(totalSumaCos(cos));
