
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel" , "Stéphane"];
let choix = prompt("Saisissez un prenom !")
console.log(tab)
let occurence = tab.indexOf(choix);
console.log(occurence)
if(occurence > -1){
    tab.splice(occurence, 1);
    tab.push(" ");
    console.log(tab);
}else{
    alert("Vous vous etes trompez ! Recommencez")
}





