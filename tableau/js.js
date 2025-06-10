// tri tableau par bul

function triBybul(tab) {
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1 - i; j++) {
      if (tab[j] > tab[j + 1]) {
        let tampo = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = tampo;
      }

      console.log(`i=${i} et j=${j} :`, tab);
    }
  }
}
//  triBybul([100,98,8,20,32,2,5,38,50])

function pairImpair(tab) {
  //    declaration de la variable tableau
  const pair = [];
  const impair = [];

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pair.push(tab[i]);
    } else {
      impair.push(tab[i]);
      // console.log(tab[i]);
    }
  }
  console.log("Nombre pair", pair);
  console.log("Nombre impair", impair);
}
//   pairImpair([100,98,8,20,32,2,5,9,15,38,50])

function estPremier(n) {
  if (n <= 1) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }

  return true;
}
function nombrePremier(params) {
  const premier = [];
  const nonpremier = [];
  
  for (let i = 0; i < params.length; i++) {
    let nombre = params[i];

    if (nombre <= 1) {
      nonpremier.push(nombre);
    //   continue
    }
    let estPremier = true;

    for (let j = 2; j < Math.sqrt(nombre); j++) {
      if (nombre % j == 0) {
        estPremier = false;
      }
    }

    if (estPremier) {
      premier.push(nombre);
    } else {
      nonpremier.push(nombre);
    }
  }

  console.log("nombre premier:", premier);
  console.log("nombre non premier:", nonpremier);
}
nombrePremier([100, 98, 8, 20, 32, 2, 5, 9, 15, 38, 50]);
