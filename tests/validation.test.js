const test = require("node:test");
const assert = require("node:assert/strict");
const { validerNom } = require("../validation.js");

test("accepte un nom valide", () => {
    assert.equal(validerNom("Sara"), true);
});

test("refuse une chaîne vide", () => {
    assert.equal(validerNom(""), false);
    24
});

test("refuse un nom avec un seul caractère", () => {
    assert.equal(validerNom("A"), false);
});

test("refuse les espaces seuls", () => {
    assert.equal(validerNom(" "), false);
});

test("accepte un nom entouré d'espaces", () => {
    assert.equal(validerNom(" Sara "), true);
});

test("refuse une valeur qui n'est pas une chaîne", () => {
    assert.equal(validerNom(null), false);
});