function validerNom(nom) {
return typeof nom === "string" && nom.trim().length >= 2;
}

// Permet d'utiliser la fonction dans Node.js pour les tests.
if (typeof module !== "undefined" && module.exports) {
module.exports = { validerNom };
}