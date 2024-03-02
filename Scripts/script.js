function choisirPhrasesOuMots(){
    let choix = prompt("Veuillez choisir parmis la liste: mot / phrases")
    while(choix !== "mot" && choix !== "phrases"){
        choix = prompt("Veuillez choisir parmis la liste: mot / phrases")
    }
    return choix
}

function LancerBoucleJeu(MotsOuPhrases){
    for(let i = 0; i < MotsOuPhrases.length; i++ ){
        let motUtilisateur = prompt("Veuillez saisir le mot : " + MotsOuPhrases[i])
        if(motUtilisateur === MotsOuPhrases[i]){
            score++
        }
    }
}

function afficherResultat(score, nombreDeMots){
    console.log("Votre score est de : " + score + " sur " +nombreDeMots)
}

