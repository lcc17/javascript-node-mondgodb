"use strict";

var fs = require("fs");
var path = require("path");

var versionModulo = function (moduleName, callBack) {
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callBack(err);
            return;
        }
        // console.log(err, data);

        // si no ha habido error
        // convertir contenido en objeto

        var packageJson = {} ;
        try {
            packageJson = JSON.parse(data);
        } catch(e) {
            callBack('Error a parsear fichero ' + fichero)
            return;
        }

        if (packageJson && !packageJson.version) {
            callBack('no se encuentra la etiqueta "version" en ' + fichero);
            return;
        }

        // Llamamos al callback de finalización
        callBack( null, packageJson.version );
    });
};

// Uso de la función

var modulo = "chance";

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log('Hubo un error: ' + err);
        return;
    } 
    console.log('La versión del módulo ' + modulo + ' es ' + version);
})
