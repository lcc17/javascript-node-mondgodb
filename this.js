'use strict'

var casa = {
	ventanas: 2,
	cuantasVentanas: function() {
		console.log('la casa tiene ' + this.ventanas + ' ventanas')
	}
}

// pasamos un objeto como un contructor
function Coche() {
	this.ruedas = 4,
	this.cuantasRuedas = function() {
		console.log('El coche tiene ' + this.ruedas + ' ruedas');
	}
}

var coche = new Coche();

setTimeout(casa.cuantasVentanas.bind(casa), 1000);

setTimeout(coche.cuantasRuedas.bind(coche), 1000);

coche.cuantasRuedas();

casa.cuantasVentanas();