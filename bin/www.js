#!/usr/bin/env node
/**
 * Module dependencies.
 */

var app = require('../app'); //app es una funcion de tipo midleware (codigo intermediario)
var debug = require('debug')('prueba1:server');
var http = require('http'); //nos ayuda a crear el archivo web

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000'); //El puerto por el cual nos va servir 
app.set('port', port);                                //node Se enlaza con el SO, tiene acceso a la info, 
                                                      //Env-Envairement(es una memoria) a las variables de entorno la ruta 
                                                      //port = es una variable de entorno, la cual se busca en el env
                                                      //Con una condicion chocut ort en donde es True y si no fals pero este ya es verdadero

/**
 * Create HTTP server.
 */

var server = http.createServer(app); //Aqui se crea el servidor, recibe una estancia en express 

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); //El servidor que esta a la escucha de una peticion y responde en el puerto
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) { //Arrow Function/Lambda Expression
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;//si resulta ser que no 
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') { //ecepcion 
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() { //servidor en modo onListening
  var addr = server.address();
  var bind = typeof addr === 'string' //pregunta si bind es un string
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('Listening on ' + bind);
    let{port}=addr
  console.log('Listening at  http://localhost: ${port}'); //Listening= le dice al servidor cuando ya estes escuchando!!!
}
