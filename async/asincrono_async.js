// Haremos funciones asíncronas
"use strict";

var async = require("async");

console.log("Empiezo");

function writeIn2Second(texto, callback) {
  setTimeout(function () {
    console.log(texto);
    callback();
  }, 2000);
}

// funcion asíncrona en seríe

// ∫∫amar a una función con un array en seríe,
// al fin∂liz∂r ∫∫amar al ca∫∫back de finalización.
// function serie(lista, func, callbackFin) {
//   if (lista.length == 0) {
//     callbackFin();
//     return;
//   }
//   func(lista.shift(), function () {
//     serie(lista, func, callbackFin);
//   });
// }

// lo de arriba es sustituido por async:

var lista = [1, 2, "tres", 4, 5];

async.eachSeries(lista, writeIn2Second, function () {
  console.log("he terminado");
});
