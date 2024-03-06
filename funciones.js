// creamos una función básica

function funcionBasica() {
  console.log("Esta función básica ejecutó!");
}
// no recibe parametro ni devuelve nada con return
funcionBasica();

// funcion como declaración, con argumentos y retorno
function suma(arg1, arg2) {
  return arg1 + arg2;
}
console.log(suma(3, 4));

// función como expresión

var multiplica = function (a, b) {
  return a * b;
};
console.log(multiplica(2, 6));

// acceso al contexto superior

var lang = "es";

function accesoContexto() {
  console.log("en el contexto superior: ", lang);
}

accesoContexto();

// método de un objeto

var agente = {
  nombre: "Smith",
  saluda: function () {
    console.log("Hola, soy el agente " + this.nombre);
  },
};

agente.saluda();

// constructor de objetos

function Fruta(nombre) {
  this.getNombre = function () {
    return nombre;
  };
  this.setNombre = function (valor) {
    nombre = valor;
  };
}
// crear un objeto fruta

var limon = new Fruta("Citrus limon");
console.log(limon);
console.log(limon.getNombre());

limon.setNombre("Manzana");
console.log(limon.getNombre());