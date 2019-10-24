/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

alert("C'est un message de bienvenue, alors bienvenue XAVIER!");
console.log("C'est un message de bienvenue, alors bienvenue XAVIER!");

console.log("1: Liste des contacts");
console.log("2: Ajouter un contact");
console.log("3: Quitter");

class contact {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }
  decrire() {
    return `Prénom: ${this.prenom}, Nom: ${this.nom}`;
  }
}

const tableauContacts = [];

const carole = new contact("Carole", "Lévisse");
const melodie = new contact("Mélodie", "Nélsonne");

tableauContacts.push(carole);
tableauContacts.push(melodie);

var choix = prompt("Choisissez une option:");

while (choix !== "3") {
  if (choix === "1") {
    console.log("1: Liste des contacts");
    tableauContacts.forEach(contact => {
      console.log(contact.decrire());
    });
    console.log("1: Liste des contacts");
    console.log("2: Ajouter un contact");
    console.log("3: Quitter");
    var choix = prompt("Choisissez une option:");
  } else if (choix === "2") {
    var nouveauContactPrenom = prompt("Prénom du contact");
    var nouveauContactNom = prompt("Nom du contact");
    tableauContacts.push(new contact(nouveauContactPrenom, nouveauContactNom));

    console.log("Le contact est bien ajouté");
    console.log("1: Liste des contacts");
    console.log("2: Ajouter un contact");
    console.log("3: Quitter");
    var choix = prompt("Choisissez une option:");
  }
}
if (choix === "3") {
  console.log("Vous quitter le gestionnaire de contacts");
}
