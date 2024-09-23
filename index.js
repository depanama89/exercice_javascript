let nom ="Test"
let prenom="check"
let sexe=""
const age= ""
if(nom =="" || prenom=="" || age=="" || sexe==""){
    console.log("remplir les champs vides ")
}else{
    if(sexe=="M"){
        console.log(`Bienvenu Mr ${nom} ${prenom}`)
    }else{
        console.log(`Bienvenu Mme ${nom} ${prenom}`) 
    }
}

