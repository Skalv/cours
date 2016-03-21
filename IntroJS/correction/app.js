// On attend le chargement complet de la page
window.onload = function() {
  // Fonction qui change notre présentation
  function changePresentation (e) {
    // On stop l'envois du formulaire
    e.preventDefault();

    // On change le titre
    var newTitle = document.getElementsByName("title")[0];
    var elementTitre = document.getElementsByClassName("titre")[0];
    elementTitre.textContent = newTitle.value;

    // On change le paragraphe
    var newPara = document.getElementsByName("paragraphe")[0];
    var elementParagraphe = document.getElementsByClassName("paragraphe")[0];
    elementParagraphe.textContent = newPara.value;

    // On change la couleur du titre
    var newTitleColor = document.getElementsByName("titleColor")[0];
    elementTitre.style.color = newTitleColor.value;

    // On change la couleur du background
    var newBgColor = document.getElementsByName("bgColor")[0];
    document.body.style.backgroundColor = newBgColor.value;
  }


  // On récupère le formulaire
  var form = document.getElementsByClassName('monForm')[0];
  // On écoute la soumission du formulaire
  form.addEventListener("submit", changePresentation, false);
}