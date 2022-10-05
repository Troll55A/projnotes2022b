//El archivo de configuracion debe usar ES5

//Importar un administrador de rutas de archivos
const path = require('path');

//Exportamos un objeto de configuracion, que sera usado por webpack
module.exports ={
    //mode
mode:'production',
//1. El archivo de entrada o indexador
    entry: "./client/index.js",
//2. Especificar el archivo de salida
output:{
path:path.resolve(__dirname,"public"),
//2.2 Nombre del archivo de salida
filename:"bundle.js"
},
//3.Configuranco el servidor de desarrollo
devServer:{
    //3.1 Folder de archivos estaticos
    static:path.join(__dirname,"public"),
    //3.2 Puerto del servidor de desarrollo
    port:8080,
    //3.3 Definiendo el host
    host:"localhost"
}
}



