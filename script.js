//Déclaration d'un tableau d'objets pour stocker les informations sur les eleves
var eleve = [
    {
        nom: "Kenfack",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Ndongo",
        prenom: "Marie",
        age: 16
    },
    {
        nom: "Kamga",
        prenom: "Pierre",
        age: 17
    }
];

// Affichage de la variable "eleves" dans la console
console.log(eleve);

// Fonction pour incrémenter l'âge de chaque élève
function incrementerAgeDesEleves(eleves, annees) {
    for (var i = 0; i < eleves.length; i++) {
      eleves[i].age += annees;
    }
  }
  
  // Appel de la fonction pour incrémenter l'âge des élèves de 1 an
  incrementerAgeDesEleves(eleve, 1);
  
  // Affichage des élèves mis à jour dans un template string
  eleve.forEach(function(eleve) {
    console.log(`Nom: ${eleve.nom}, Prénom: ${eleve.prenom}, Age: ${eleve.age}`);
  });