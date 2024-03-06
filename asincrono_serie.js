// Haremos funciones asíncronas
"use strict";

console.log("Empiezo");

function writeIn2Second(texto, callback) {
  setTimeout(function () {
    console.log(texto);
    callback();
  }, 2000);
}

// funcion asíncrona en seríe

// ∫∫amar a una función N veces en seríe,
// al fin∂liz∂r ∫∫amar al ca∫∫back de finalización.
function serie(n, func, callbackFin) {
  if (n == 0) {
    callbackFin();
    return;
  }
  n--;
  func(n, function () {
    serie(n, func, callbackFin);
  });
}

serie(5, writeIn2Second, function () {
  console.log("he terminado");
});
