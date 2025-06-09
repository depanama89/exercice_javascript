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
function nbPairImpair(tab){
    const pair=[]
    const impair=[]
    for(let i=0;i<tab.length;i++){
        if(tab[i]%2===0){

            pair.push(tab[i])
            // console.log(`${tab[i]} est pair`);
            
        }else{
            impair.push(tab[i])
            // console.log(`${tab[i]} est impair`);
            
        }
    }
console.log("voici la liste de nombre pair",pair);
console.log("voici la liste de nombre impair",impair);

}

nbPairImpair([7, 3, 5, 2, 4, 2, 20, 50])

// nombre premier du tableau
function nombrePremier(tab){
    for(let i=0;i<tab.length;i++){
        if(tab[i]<=1){
            console.log(`${tab[i]} n'est un nombre premier`);            
        }else if(tab[i]%2===0){
            console.log(`${tab[i]} n'est pas un nombre premier`);
            
        }else{
            console.log(`${tab[i]} c'est un nombre premier`);
            
        }
    }
}

nombrePremier([7, 3, 5, 2, 4, 2, 20, 50])