function ajouterapprenant() {
    const champ = document.getElementById("nom");
    const nom = champ.value.trim();
    if (!validerNom(nom)) {
        alert("Le nom doit contenir au moins deux caractères.");
        return;
    }
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(nom + " "));
    const bouton = document.createElement("button");
    bouton.textContent = "Supprimer";
    bouton.onclick = function () {
        element.remove();
    };
    element.appendChild(bouton);
    document.getElementById("liste").appendChild(element);
    champ.value = "";
}