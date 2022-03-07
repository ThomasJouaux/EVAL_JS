let PU = prompt("Saisissez un prix Unitaire");
let QTECOM = prompt("Choisissez une quantité a commandé ")
let PAP = 0;
let TOT = PU * QTECOM;
console.log(TOT);

if (TOT >= 100 && TOT <= 200) {
    let result = (TOT * 5) / 100;
    let PAP = TOT - result;
    console.log("Le prix a payer sera de : " + PAP + " aprés une remise de 5%")
    if (PAP < 500) {
        let PORT = (PAP * 2) / 100;
        console.log("Les frais de port s'eleve a : " + PORT);
        if (PORT < 6) {
            let result = (PAP + 6)
            console.log("Le prix a payer avec les frais de port est de : " + result)
        }
    }

} else if (TOT < 100) {
    let PAP = TOT
    if (PAP < 500) {
        let PORT = (PAP * 2) / 100;
        console.log(PORT);
        if (PORT < 6) {
            let result = (PAP + 6)
            console.log("Le prix a payer avec les frais de port et sans aucune remise est de : " + result)
        }
    }
} else {
    let result = (TOT * 10) / 100;
    let PAP = TOT - result;
    console.log("Le prix a payer sera de : " + PAP + " aprés une remise de 10%")

    if (PAP < 500) {
        let port = (PAP * 2) / 100;
        let resultatFinal = PAP + port;
        console.log("Les frais de port s'eleve a : " + port)
        if (port < 6) {
            let result = (TOT + 6)
            console.log(result)
            console.log("Le prix avec les frais de port sera de :" + result)
        };

        console.log("Le prix a payer aprés les fraits de port sera de : " + resultatFinal)
    } else {

        console.log("Le prix a payer aprés toutes les reduction sera de : " + PAP)
    }
}