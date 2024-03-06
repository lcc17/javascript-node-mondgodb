// Haremos funciones asíncronas
"use strict";

console.log("Empiezo");

function writeIn2Second(texto, callback) {
  setTimeout(function () {
    console.log(texto);
    callback();
  }, 2000);
}
// creamos una variable de control:
var acabados = 0;
// bucle asíncrono en paralelo
for (var i = 0; i < 5; i++) {
  writeIn2Second("texto " + i, function () {
    acabados++;
    if (acabados >= 5) {
      console.log("fin texto");
    }
  });
}