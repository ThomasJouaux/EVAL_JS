let casse = 100;
let age= parseInt(prompt("Saisissez un age"));
let tab = [];
let decompteJeune = 0;
let decompteVieu = 0;
let decompteMoyen = 0;


 while(age < casse){
     age = parseInt(prompt("Saisissez un age"))
     tab.push(age)

    console.log(tab)
if(age <= 20){
    decompteJeune++
}else if(age >= 40){
    decompteVieu++
}else{
    decompteMoyen++
}
 }
console.log("Il y a "+decompteJeune+" de personnes agée au maximum de 20 ans")
console.log("Il y a "+decompteMoyen+" personnes agée de plus de 20 ans et moins de 40 ans")
console.log("Il y a "+decompteVieu+" personnes agée d'au minimum 40 ans.")
document.write("Il y a "+decompteJeune+" de personnes agée au maximum de 20 ans. <br>")
document.write("Il y a "+decompteMoyen+" personnes agée de plus de 20 ans et moins de 40 ans. <br>")
document.write("Il y a "+decompteVieu+" personnes agée d'au minimum 40 ans. <br>")