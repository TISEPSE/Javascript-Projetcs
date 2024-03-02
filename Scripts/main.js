function lanceJeu(){
    let choix = choisirPhrasesOuMots()

    if(choix ==="mot"){
        LancerBoucleJeu(listeMots)
        nombreDeMots = listeMots.length
    }else{
        LancerBoucleJeu(listePhrases)
        nombreDeMots = listePhrases.length
    }

    afficherResultat(score, nombreDeMots)
}

lanceJeu()