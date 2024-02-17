//------Creating an empty array for ticket orders
const tickets = []

//------function for buying tickets
function buyTicket() {
    const film = document.getElementById("film");
    const antall = document.getElementById("antall");
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefonnr = document.getElementById("telefonnr");
    const epost = document.getElementById("epost");
    const wrongAmount = document.getElementById("wrongAmount");
    const wrongFirstName = document.getElementById("wrongFirstName");
    const wrongLastName = document.getElementById("wrongLastName");
    const wrongNumber = document.getElementById("wrongNumber");
    const wrongEmail = document.getElementById("wrongEmail");

    let wrongInput = false;

//------ if-statements that validate the user input using regex,
//------ Using the wrongInput variable to hinder an order with invalid inputs from being put into the tickets array

    if (!/^[1-99]+$/.test(antall.value)) {
        wrongAmount.innerText = "Velg antall billetter";
        wrongInput = true;
    }
    if (!/^[a-åA-Å]+$/.test(fornavn.value)) {
        wrongFirstName.innerText = "Skriv inn fornavn";
        wrongInput = true;
    }
    if (!/^[a-åA-Å]+$/.test(etternavn.value)) {
        wrongLastName.innerText = "Skriv inn etternavn";
        wrongInput = true;
    }
    if (!/^\d{8}$/.test(telefonnr.value)) {
        wrongNumber.innerText = "Skriv inn ett gyldig telefonnummer (8 tall)";
        wrongInput = true;
    }
    if (!/^[a-åA-Å0-9._%+-]+@[a-åA-Å0-9.-]+\.[a-åA-Å]+$/.test(epost.value)) {
        wrongEmail.innerText = "Skriv inn epost";
        wrongInput = true;
    }

    if (wrongInput === false) {
        const order = {
            film: film.value,
            antall: antall.value,
            fornavn: fornavn.value,
            etternavn: etternavn.value,
            telefonnr: telefonnr.value,
            epost: epost.value
        };
//------ Puts the created order into the tickets array
        tickets.push(order);
//------ Resetting the variable values once the order is pushed
        film.value = "";
        antall.value = "";
        antall.innerText = "";
        fornavn.value = "";
        fornavn.innerText = "";
        etternavn.value = "";
        etternavn.innerText = "";
        telefonnr.value = "";
        telefonnr.innerText = "";
        epost.value = "";
        epost.innerText = "";

        wrongAmount.value = "";
        wrongAmount.innerText = "";
        wrongFirstName.value = "";
        wrongFirstName.innerText = "";
        wrongLastName.value = "";
        wrongLastName.innerText = "";
        wrongNumber.value = "";
        wrongNumber.innerText = "";
        wrongEmail.value = "";
        wrongEmail.innerText = "";
    }

//------ Function for printing out the tickets array
    function showOrder() {

        let ut = "<table id='table'><tr>" +
            "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let i of tickets) {
            ut += "<tr>";
            ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>"
                + i.fornavn + "</td><td>" + i.etternavn + "</td><td>"
                + i.telefonnr + "</td><td>" + i.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("list").innerHTML = ut;
    }

    showOrder();
}

//------ Function that empties the array when the button is pressed
function deleteAll() {
    tickets.length = 0;
    document.getElementById("list").innerHTML = "";
}