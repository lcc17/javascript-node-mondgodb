"use strict";

// function crearClosure(valor) {
// 	return function() {
// 		return valor;
// 	}
// }

// var cl1 = crearClosure(1);

// console.log(cl1());

function crearSuma(valor) {
	return function(valor2) {
		return valor + valor2;
	}
}

var suma5 = crearSuma(5);

console.log(suma5(20));
console.log(suma5(40));