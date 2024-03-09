"use strict";

function Persona(nombre) {
	this.name = nombre;
}
// Creamos persona con la funcion constructora Persona()
var persona = new Persona('Neo');
// Añade propiedades (que sepa saludar)
Persona.prototype.saluda = function() {
	console.log("Hola, me llamo " + this.name);
}

console.log(persona.name); // Neo
persona.saluda(); // Hola, me llamo Neo
