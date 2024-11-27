const billettArray=[];

    function kjopBillett() {

        const film = document.getElementById("film").value;
        const antallStreng = document.getElementById("antall").value;
        const antall = Number(antallStreng);
        const fornavn = document.getElementById("fornavn").value;
        const etternavn = document.getElementById("etternavn").value;
        const telefonnrStreng = document.getElementById("telefonnr").value;
        const telefonnr = Number(telefonnrStreng);
        const epost = document.getElementById("epost").value;

        if (film == "Velg film her") {
            document.getElementById("utFilm").innerHTML = "Vennligst velg en film";
            document.getElementById("utFilm").style.color = "red";
        }

        else if (isNaN(antall) || antall < 1 || !Number.isInteger(antall)) {
            document.getElementById("utAntall").innerHTML = "Vennligst skriv inn et positivt heltall i antall";
            document.getElementById("utAntall").style.color = "red";
        }

        else if (fornavn == "") {
            document.getElementById("utFornavn").innerHTML = "Vennligst skriv noe inn i fornavn";
            document.getElementById("utFornavn").style.color = "red";
        }

        else if (etternavn == "") {
            document.getElementById("utEtternavn").innerHTML = "Vennligst skriv noe inn i etternavn";
            document.getElementById("utEtternavn").style.color = "red";
        }

        else if (isNaN(telefonnr) || telefonnr < 1 || !Number.isInteger(telefonnr)) {
            document.getElementById("utTelefonnr").innerHTML = "Vennligst skriv inn et telefonnr i telefonnr";
            document.getElementById("utTelefonnr").style.color = "red";
        }

        else if (epost == "") {
            document.getElementById("utEpost").innerHTML = "Vennligst skriv noe inn i epost";
            document.getElementById("utEpost").style.color = "red";
        }

        else {
            let billett = {
                film: film,
                antall: antall,
                fornavn: fornavn,
                etternavn: etternavn,
                telefonnr: telefonnr,
                epost: epost
            };

            billettArray.push(billett);

            let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";

            for (let p of billettArray) {
            ut += "<tr>";
            ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.epost + "</td>";
            ut += "</tr>";
            }

            document.getElementById("film").value = "";
            document.getElementById("antall").value = "";
            document.getElementById("fornavn").value = "";
            document.getElementById("etternavn").value = "";
            document.getElementById("telefonnr").value = "";
            document.getElementById("epost").value = "";

            document.getElementById("utFilm").innerHTML = "";
            document.getElementById("utAntall").innerHTML = "";
            document.getElementById("utFornavn").innerHTML = "";
            document.getElementById("utEtternavn").innerHTML = "";
            document.getElementById("utTelefonnr").innerHTML = "";
            document.getElementById("utEpost").innerHTML = "";

            document.getElementById("utMelding").innerHTML = ut;
            }
    }

    function slettBillett(){
        billettArray.splice(0,billettArray.length);
        document.getElementById("utMelding").innerHTML="";
    }
