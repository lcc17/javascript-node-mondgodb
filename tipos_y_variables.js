// Ejercicios correspondientes al capitulo 11.Ejercicios tipos y variables:
var numero = 1;

console.log(numero);
console.log(typeof numero + "\n2");
numero = "hola";
console.log(numero);

// string
console.log("STRING: ");
console.log("texto de prueba".split(""));
// texto multilinea
console.log("MULTILINEA: ");
var textoLargo = "Texto1\n" + "\nTexto2";

console.log(textoLargo);
// otro tipo
console.log("OTRO TIPO: ");
var textoLargo2 = ["linea1", "linea2", "linea3"].join("\n");
// con el método .join une los elementos del array intercalando con el valor que le digas
console.log(textoLargo2);
// vamos a crear otro objeto con sus propiedades (number, string, function)
console.log("OTRO OBJETO: ");
var objeto = {
  numero: 1,
  texto: "hola",
  sumaDos: function (v) {
    return v + 2;
  },
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(3));

// array, con sus propiedades entre corchetes [number, string, function, object]
console.log("ARRAYS: ");

var array = [
  "\n",
  3,
  "hola",
  function (v) {
    return v + 2;
  },
  { valor: "hola" },
];

console.log(array);
console.log(array[3](300));

// hoisting
console.log("HOISTING:");

var x = 100;

function y() {
  if (x == 2) {
    var x = 30;
  }
  return x;
}
console.log(x, y()) // 100 undefined