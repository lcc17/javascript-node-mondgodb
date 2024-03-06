// Haremos funciones asíncronas
"use strict";

console.log("Empiezo");

function writeIn2Second(texto, callback) {
  setTimeout(function () {
    console.log(texto);
    callback();
  }, 2000);
}
// funciones en serie
writeIn2Second("texto 1", function () {
  console.log("fin 1");

  writeIn2Second("texto 2", function () {
    console.log("fin 2");
  });
});
