let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseaux = document.getElementById("ciseaux");
let result = document.getElementById("result");
let nbVictoire = 0;
let nbDefaite = 0;
let nbEgalite = 0;  


function choixOrdi() {
  let ordichoice = (Math.random().toFixed(1) * 10) % 3;
  if (ordichoice == 0) {
    ordichoice = "pierre";
  } else if (ordichoice == 1) {
    ordichoice = "feuille";
  } else if (ordichoice == 2) {
    ordichoice = "ciseaux";
  }
  return ordichoice;
}

function game(userchoice) {
  let ordichoice = choixOrdi();
  document.getElementById("choixBot").innerHTML =
    "ProBot a choisi : " + ordichoice;
  console.log(ordichoice + " " + userchoice);
  if (userchoice == ordichoice) {
    console.log("égalité");
    return -1;
  }
  if (
    (userchoice == "pierre" && ordichoice == "ciseaux") ||
    (userchoice == "feuille" && ordichoice == "pierre") ||
    (userchoice == "ciseaux" && ordichoice == "feuille")
  ) {
    console.log("victoire");
    return 1;
  } else {
    console.log("défaite");
    return 0;
  }
}

function changeHTML(userchoice) {
  let resultat = game(userchoice);
  if (resultat == -1) {
    result.innerHTML = "Egalité !";
    nbEgalite += 1;
    document.getElementById("nbEgalite").innerHTML = "Nombre d'égalités : " + nbEgalite;
  } else if (resultat == 1) {
    result.innerHTML = "Victoire!";
    nbVictoire += 1;
    document.getElementById("nbVictoire").innerHTML = "Nombre de victoire : " + nbVictoire;
  } else if (resultat == 0) {
    result.innerHTML = "Défaite!";
    nbDefaite += 1;
    document.getElementById("nbDefaite").innerHTML = "Nombre de défaite : " + nbDefaite;
  }
}

pierre.addEventListener("click", () => {
  let userchoice = "pierre";
  changeHTML(userchoice);
  document.getElementById("choixJoueur").innerHTML =
    "Vous avez choisi : Pierre";
});

feuille.addEventListener("click", () => {
  let userchoice = "feuille";
  changeHTML(userchoice);
  document.getElementById("choixJoueur").innerHTML =
    "Vous avez choisi : Feuille";
});

ciseaux.addEventListener("click", () => {
  let userchoice = "ciseaux";
  changeHTML(userchoice);
  document.getElementById("choixJoueur").innerHTML =
    "Vous avez choisi : Ciseaux";
});

let reset = document.getElementById("reinitialise");
reset.addEventListener("click", () => {
    nbVictoire = 0;
    nbDefaite = 0;
    nbEgalite = 0;
    document.getElementById("nbVictoire").innerHTML = "Nombre de victoire : " + nbVictoire;
    document.getElementById("nbDefaite").innerHTML = "Nombre de défaite : " + nbDefaite;
    document.getElementById("nbEgalite").innerHTML = "Nombre d'égalités : " + nbEgalite;
});
