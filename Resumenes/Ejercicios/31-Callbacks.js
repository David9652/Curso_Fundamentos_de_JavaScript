const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

// Solamente se ejecutará el CallBack si el request es success
$.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, OPTS, function (data) {
    console.log(`Hola, yo soy ${data.name}`)
    console.log(arguments)
    // arguments es una variable que tienen todas las funciones, el cual nos dará un array con todos los parámetros que está recibiendo la función.
})

/*
Un callback es una función que se pasa a otra función como un argumento. Esta función se va a ejecutar en algun futuro (o no) llamada por otra funcion o un request.
*/

console.log("Esto se hará primero que la petición")

/*
crossDomain o Intercambio de recursos de origen cruzado viene por defecto en false. Es un mecanismo utilizado para permitir el paso de información entre dominios diferentes por cuestiones de seguridad. De esta forma, puedes tener tu web con una tipografia que creaste y que otras personas no puedan acceder a ella sin permiso, ya que al estar en false es considerado un “recurso restringido”. En este caso, la establecemos true para permitir el paso de información entre nuestro servidor local(localhost) y la web de swapi.com.
*/