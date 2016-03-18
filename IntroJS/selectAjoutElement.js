



window.onload = function () {
  // Function qui ajoute des sections
  function addSection() {
    // On crer un élément section
    var maSection = document.createElement("section");
    // on crer un élément titre
    var monTitreDeSection = document.createElement("h2");
    // On ajoute du texte à noter titre
    monTitreDeSection.textContent = "Mon titre de section";
    // On ajoute un listener sur notre titre
    monTitreDeSection.addEventListener("click", addArticle, false);
    // On ajoute le titre à notre section
    maSection.appendChild(monTitreDeSection);
    // ajouter section à body
    document.body.appendChild(maSection);
  }

  function addArticle(event) {
    // Retourne le premier élément <section> ancêtre de l'élément
    // sur lequel j'ai cliqué (élément cible/ currentTarget).
    var sectionVise = event.currentTarget.closest("section");
    // Création d'un élément article
    var monArticle = document.createElement("article");
    // Création d'un titre pour l'article
    var titreArticle = document.createElement("h3");
    // Ajout de texte au titre
    monArticle.textContent = "Mon titre d'article";
    // Création d'un paragraphe pour l'article
    var paraArticle = document.createElement("p");
    // Ajout de texte au paragraphe
    paraArticle.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo architecto libero ducimus! Asperiores alias tempora beatae debitis, obcaecati, nulla libero molestiae quos perspiciatis placeat quibusdam nesciunt rerum nemo quo!"
    // Ajout du titre dans l'article
    monArticle.appendChild(titreArticle);
    // Ajout du paragraphe dans l'article
    monArticle.appendChild(paraArticle);
    // Ajout de l'article à ma section visée
    sectionVise.appendChild(monArticle);
  }

  // On récupère notre H1
  var h1 = document.getElementsByTagName('h1');
  // On lui ajoute un listener
  h1[0].addEventListener("click", addSection, false);
}
