document.getElementById("myForm").addEventListener("submit", function(event) {
    let error = "Veuillez remplir le champ";
    let error2 = "Merci de cocher une case"
    let errorDate = "Merci de renseigner une date valide !"
    let errorAdresse = "Merci de renseigner une adresse valide ! "
    let errorMail = "Merci de rentrer une adresse mail valide !"
    let errorCheckBox = "Merci de cocher cette case "


    // NOM // 
    let nameFiltre = new RegExp("^[a-zA-Z]+$");
    let name = document.getElementById("nom");
    console.log(name.value)
    let testName = nameFiltre.test(document.getElementById("nom").value)
    console.log(testName);
    if (testName != true) {
        //  document.getElementById("nom").style.borderColor="FF0000";
        document.getElementById("errorName").innerHTML = '<span style="color:red">' + error + '</span>';
        console.log(error)
        document.getElementById("nom").style.border = '2px solid red';
        event.preventDefault();
    }


    // PRENOM // 
    let prenomFiltre = new RegExp("^[a-zA-Z]+$");
    let prenom = document.getElementById("prenom");
    console.log(prenom.value);
    let testPrenom = prenomFiltre.test(document.getElementById("prenom").value);
    console.log(testPrenom);
    if (testPrenom != true) {
        document.getElementById("errorPrenom").innerHTML = '<span style="color:red">' + error + '</span>';
        console.log(error)
        document.getElementById("prenom").style.border = '2px solid red';
        event.preventDefault();
    }


    // SEXE //
    let homme = document.getElementById('homme').checked;
    console.log(homme)
    let femme = document.getElementById('femme').checked;
    console.log(femme)
    let result_H_F = femme || homme;
    if (result_H_F != true) {
        document.getElementById("errorRadio").innerHTML = '<span style="color:red">' + error2 + '</span>';
        console.log(error2)
        event.preventDefault();
    }


    // DATE DE NAISSANCE // 
    let dateDeNaissanceFiltre = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}")
    let dateDeNaissance = document.getElementById("DateNaissance")
    console.log(dateDeNaissance.value)
    let testDateDeNaissance = dateDeNaissanceFiltre.test(document.getElementById("DateNaissance").value)
    console.log(testDateDeNaissance)
    if (testDateDeNaissance != true) {
        document.getElementById("errorDateNaissance").innerHTML = '<span style="color:red">' + errorDate + '</span>';
        console.log(error)
        document.getElementById("DateNaissance").style.border = '2px solid red';
        event.preventDefault();
    }


    // ADRESSE // 
    let adresseFiltre = new RegExp("^[0-9a-zA-Z ]+$")
    let adresse = document.getElementById("adresse")
    console.log(adresse.value);
    let testAdresse = adresseFiltre.test(document.getElementById("adresse").value)
    console.log(testAdresse);
    if (testAdresse != true) {
        document.getElementById("errorAdresse").innerHTML = '<span style="color:red">' + errorAdresse + '</span>';
        console.log(error)
        document.getElementById("adresse").style.border = '2px solid red';
        event.preventDefault();
    }

    // VILLE // 
    let villeFiltre = new RegExp("^[a-zA-Z]+$");
    let ville = document.getElementById("ville");
    console.log(ville.value)
    let testVille = villeFiltre.test(document.getElementById("ville").value)
    console.log(testVille);
    if (testVille != true) {
        //  document.getElementById("nom").style.borderColor="FF0000";
        document.getElementById("errorVille").innerHTML = '<span style="color:red">' + error + '</span>';
        console.log(error)
        document.getElementById("ville").style.border = '2px solid red';
        event.preventDefault();
    }

    // ADRESSE MAIL //
    let adresse_MailFiltre = new RegExp("^[a-z-A-Z-0-9.]+@[a-z-A-Z-0-9.]+$")
    let mail = document.getElementById("mail")
    console.log(mail.value)
    let testEmail = adresse_MailFiltre.test(document.getElementById("mail").value)
    console.log(testEmail)
    if (testEmail != true) {
        document.getElementById("errorMail").innerHTML = '<span style="color:red">' + errorMail + '</span>';
        console.log(error)
        document.getElementById("mail").style.border = '2px solid red';
        event.preventDefault();
    }
    // SUJET // 

    let sujetFiltre = new RegExp("^[a-zA-Z]+$")
    let sujet = document.getElementById("sujet")
    console.log(sujet.value)
    let testSujet = sujetFiltre.test(document.getElementById("sujet").value)
    console.log(testSujet)
    if (testEmail != true) {
        document.getElementById("sujetError").innerHTML = '<span style="color:red">' + error + '</span>';
        console.log(error)
        document.getElementById("demande").style.border = '2px solid red';
        event.preventDefault();
    }

    // QUESTIONS // 

    let questionFiltres = new RegExp("^[a-zA-Z]+$")
    let question = document.getElementById("question")
    console.log(question.value)
    let testQuestion = questionFiltres.test(document.getElementById("question").value)
    console.log(testQuestion)
    if (testQuestion != true) {
        document.getElementById("questionError").innerHTML = '<span style="color:red">' + error + '</span>';
        console.log(error)
        document.getElementById("question").style.border = '2px solid red';
        event.preventDefault();
    }
    // CHECKBOX // 
    let verif = document.getElementById("checkBox").checked
    console.log(verif)
    if (verif != true) {
        document.getElementById("errorCheckbox").innerHTML = '<span style="color:red">' + errorCheckBox + '</span>';
        console.log(error)
        document.getElementById("checkBox").style.border = '2px solid red';
        event.preventDefault();
    }

})