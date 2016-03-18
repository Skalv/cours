window.onload = function() {


//Fonction appelé à la validation de mon formulaire.
function valider (event) {
  // event.currentTarget == le formulaire
  // On récupère notre input type text
  var input = event.currentTarget.firstElementChild;
  // On récupère la valeur de l'input
  var monPrenom = input.value;
  // Appeler la fonction d'ajout au titre
  addMonPrenom(monPrenom);
}

function addMonPrenom (prenom) {
  // On va récupérer le span ou mettre le prenom
  var spanContainer = document.getElementsByClassName("monPrenom");
  // Ajout du prenom au texte du span
  spanContainer[0].textContent = prenom;
}

// On récupère le formulaire
var form = document.getElementsByClassName("monForm");
// Ecouter la validation de mon formulaire.
form[0].addEventListener("submit", valider, false);
}
