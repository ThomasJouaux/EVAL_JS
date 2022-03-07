let table = prompt("Saisissez une table de multiplication ! ")

function tableMultiplication(table){
    for(multiplication = 0 ; multiplication < 11 ; multiplication++){
        resultat = multiplication*table
        console.log(resultat)
        document.write(table+" x "+multiplication+" = "+resultat+"<br>")
    }
}
tableMultiplication(table);