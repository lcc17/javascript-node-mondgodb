// definimos un objeto de forma literal

var empleado = {
  name: "Thomas",
  profesion: "Dev", // string
  edad: 42, // number
  armas: ["rifle", "pistola", "katana", 'boxeo'], // array
};

console.log(empleado);
console.log(typeof empleado); // object

// convertimos a string, o lo que es lo mismo

var serializado = JSON.stringify(empleado);

console.log(serializado); // {"name":"Thomas","profesion":"Dev","edad":42,"armas":["rifle","pistola","katana"]}

// des-serializar el objeto
// creamo un error al agregar una llave de más al array
// serializado = serializado + "}";

var leido; // leído de la web o del disco
// preveer que pueda fallar
try {
  leido = JSON.parse(serializado); // colocamos en leido el resultado del parseo
} catch (err) {
  // en caso que esto fallara
  console.log('no se pudo leer "serializado"');
}
// para comprobar si leído tiene algo

if (typeof leido != "undefined") {
  console.log("Hay algo leído");
} else {
  console.log("no hay nada leido");
}

//  vamos a recorrer las armas del agente y a decirselo al usuario que armas tiene

for (var i = 0; i < empleado.armas.length; i++) {
  var arma = empleado.armas[i];
  console.log(empleado.name +(arma == 'boxeo' ? ' sabe ' : ' tiene ' )+ arma);
}
// Thomas tiene rifle
// Thomas tiene pistola
// Thomas tiene katana
// Thomas sabe boxeo
