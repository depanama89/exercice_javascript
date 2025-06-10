// exercice numero 1 tri par bull

// const tab = ;

function triBull(tab) {
  const n = tab.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (tab[j] > tab[j + 1]) {
        let tampo = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = tampo;
      }
      console.log(`i=${i} et j=${j}`, tab);
    }
  }
}

// triBull([7, 3, 5, 2, 4, 2, 20, 50])

// verification de nombre pair et impair
function nbPairImpair(tab) {
  const pair = [];
  const impair = [];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pair.push(tab[i]);
      // console.log(`${tab[i]} est pair`);
    } else {
      impair.push(tab[i]);
      // console.log(`${tab[i]} est impair`);
    }
  }
  console.log("voici la liste de nombre pair", pair);
  console.log("voici la liste de nombre impair", impair);
}

// nbPairImpair([7, 3, 5, 2, 4, 2, 20, 50])

// nombre premier du tableau
// fonction qui permet de verifier si le nombre est premier
function estPremier(n) {
  if (n <= 1) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function nombrePremier(tab) {
  const premier = [];
  const nonPremiers = [];

  for (let i = 1; i < tab.length; i++) {
    if (estPremier(tab[i])) {
      premier.push(tab[i]);
    } else {
      nonPremiers.push(tab[i]);
    }
  }

  console.log("Nombre premier", premier);
  console.log("Nombre non premier", nonPremiers);
}
// nombrePremier([7, 3, 5, 2, 4,  20, 50,9,100,121,122,31,71,81])

function triParInsertion(tab) {
 for(let i=1;i<tab.length;i++){
    let key=tab[i]
    let j=i-1

    while(j>=0 && tab[j]>key){
        tab[j+1]=tab[j]
        j--
    }

    tab[j+1]=key
 }
 console.log(tab);
 
}

function addElement(tab,element){
    const index=Math.floor(tab.length/2)
    // tab.splice(index,0,element)
    

    return console.log(tab);
    
}
triParInsertion([7, 3, 5, 2, 4, 20, 50, 9, 100, 121, 122, 31, 71, 81]);

addElement([7, 3, 5, 2, 4, 20, 50, 9, 100, 121, 122, 31, 71, 81],39)