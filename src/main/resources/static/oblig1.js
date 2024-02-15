// Setting up an empty array
const tickets = []

function buyTicket() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    let wrongInput = false;

    if (antall <= 0) {
        document.getElementById("wrongAmount").innerText = "Skriv inn antall";
        wrongInput = true;
    } else {
        document.getElementById("wrongAmount").value = "";
    }

    if (fornavn === "") {
        document.getElementById("wrongFirstName").innerText = "Skriv inn fornavn";
        wrongInput = true;
    } else {
        document.getElementById("wrongFirstName").value = "";
    }
    if (etternavn === "") {
        document.getElementById("wrongLastName").innerText = "Skriv inn etternavn";
        wrongInput = true;
    } else {
        document.getElementById("wrongLastName").value = "";
    }
    if (telefonnr === "") {
        document.getElementById("wrongNumber").innerText = "Skriv inn telefonnr";
        wrongInput = true;
    } else {
        document.getElementById("wrongNumber").value = "";
    }
    if (epost === "") {
        document.getElementById("wrongEmail").innerText = "Skriv inn epost";
        wrongInput = true;
    } else {
        document.getElementById("wrongEmail").value = "";
    }

    if (wrongInput === false) {
        const order = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        tickets.push(order);

        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("antall").innerText = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("fornavn").innerText = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("etternavn").innerText = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("telefonnr").innerText = "";
        document.getElementById("epost").value = "";
        document.getElementById("epost").innerText = "";

        document.getElementById("wrongAmount").value = "";
        document.getElementById("wrongAmount").innerText = "";
        document.getElementById("wrongFirstName").value = "";
        document.getElementById("wrongFirstName").innerText = "";
        document.getElementById("wrongLastName").value = "";
        document.getElementById("wrongLastName").innerText = "";
        document.getElementById("wrongNumber").value = "";
        document.getElementById("wrongNumber").innerText = "";
        document.getElementById("wrongEmail").value = "";
        document.getElementById("wrongEmail").innerText = "";
    }

// En funksjon som viser bestillingen som ble gjort
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

// Funksjon som sletter alle billetter (tømmer arrayet)
function deleteAll() {
    tickets.length = 0;
    document.getElementById("list").innerHTML = "";
}