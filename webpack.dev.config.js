//El archivo de configuracion debe usar ES5

//Importar un administrador de rutas de archivos
//const { plugin } = require('mongoose');
const path = require('path');
const MiniCssExtractPlugin =
require('mini-css-extract-plugin');
//Exportamos un objeto de configuracion, que sera usado por webpack
module.exports ={
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
},
//Modulo es un objeto que declara reglas, creamos un arreglo y metemos una regla
module:{
    rules:[
        {
            test:/\.js$/, //por lo tanto aplica en todos los archivos que terminan .js 
            exclude:/(node_modules|bower_components)/, //No queremos que nos valla empaquetar estos archivos
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            {
                                'modules':false,
                                'useBuiltIns':'usage',
                                'targets':{"chrome":"80"}, //0.25%,not dead=Quiero apuntar a todo aquel que tenga el 25% en el mercado y que no este sin mantenimiento
                                'corejs':3 
                            }
                        ]
                    }
                }
            ]
        },
        {
            test:/\.css$/,
            use:['css-loader']
        }
    ]
},//Seccion de plugins
plugins:[
new MiniCssExtractPlugin({
    filename:'stylesheet/app.css'
})
]

}



