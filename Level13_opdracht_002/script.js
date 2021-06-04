var age = 18;
var isFemale = false;
var driverStatus = "bob";
var name = "Sarah";
var totalAmount = 100;

// Dit is een leeftijdscheck
// Deel 1 50% korting
if (age >= 18 && age <= 25) {

    console.log("Welkom, Je krijgt 50% korting op biertjes!");
}

else if (age >25) {

    console.log("Welkom, je bent oud genoeg om binnen te komen maar te oud voor 50% korting op biertjes!");

}

else {

    console.log("Je bent nog geen 18 jaar of ouder, ik wil je verzoeken om buiten te blijven.");

}

// Deel 2: Ludieke actie! 
if (name === "Sarah" || name === "Bram") {

    console.log ("Je hebt recht op een gratis biertje!")

}
else {
    console.log ("Helaas, je hebt geen recht op een gratis biertje.")
}

// Deel 3: Jubileum korting 
if (totalAmount > 25 && totalAmount <= 50) {

    console.log ("Je krijgt gratis (vega)bitterballen")

}

else if (totalAmount > 50 && totalAmount <= 100) {

    console.log ("Je krijgt een gratis portie nachos")

}

else if (totalAmount > 100) {

    console.log ("Je krijgt een gratis flesje champagne")

}

else {

    console.log ("Helaas, je hebt geen recht op de acties aangezien het bedrag lager is dan 25 euro")

}



// Dit is een geslacht check
if (isFemale) {

    console.log("Welkom op de ladiesnight");
}

else {

    console.log("Helaas je bent niet welkom, dit betreft een ladiesnight.");

}

// Dit is een driver status check
if (driverStatus == "bob") {

    console.log("Jij bent de bob en mag rijden!");
}

else {

    console.log("Jij hebt gedronken en bent niet de bob, je mag niet meer rijden!");

}
