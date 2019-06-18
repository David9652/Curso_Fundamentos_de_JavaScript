/*
Las promesas funcionan de manera asíncrona, pero no siempre es así. Una promesa puede resolverse de manera síncrona, es decir, resolver una promesa que devuleva un número sin realizar ninguna tarea asíncrona.

Polyfills --> https://stackoverflow.com/questions/7087331/what-is-the-meaning-of-polyfills-in-html5
*/

const API_URL = 'https://swapi.co/api/'
debugger
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function getCharacter(id) {
    return new Promise((resolve, reject) => {
        // LLamado asíncrono dentro de la promesa
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $ // El símbolo pesos hace referencia a Jquery
        .get(URL, OPTS, function (data) {
            resolve(data)
        })
        .fail( () => reject(id))
    })
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

getCharacter(1)
    .then( character => {
        console.log(`El personaje 1 es ${character.name}`)  
        return getCharacter(2)
    })
    .then( character => {
        console.log(`El personaje 2 es ${character.name}`)  
        return getCharacter(3)
    })
    .then( character => {
        console.log(`El personaje 3 es ${character.name}`)  
        return getCharacter(4)
    })
    .then( character => {
        console.log(`El personaje 4 es ${character.name}`)  
        return getCharacter(5)
    })
    .then( character => {
        console.log(`El personaje 5 es ${character.name}`)  
    })
    .catch(onError)

console.log("Esto se hará primero que la petición")

/* Si getCharacter(1) retorna una promesa, cuál es la necesidad de colocar return getCharacter(x) cuando se encadena.

Esto es debido al alcance de la función.

Como menciona Sacha en la clase anterior. La forma de obtener el valor de una promesa es usando .then(). En el cual pasaremos una función que se ejecutará en el caso de que se resuelva exitosamente la tarea asíncrona.

Esta función anónima tiene su propio alcance delimitado por las llaves “{ }”. Así como la función obtener personaje tiene su propio alcance, delimitado por sus llaves “{ }”.
El return de obtenerpersonaje envía la promesa a la función anónima. El return de la función anónima la envía al siguiente .then(). Y así sucesivamente hasta llegar al último .then().

.then(personaje =>
{
	return obtenerpersonaje(id)
	{
		//CODE
		/*hasta aquí llega el alcance de obtenerpersonaje.*/
		//return promesa;
		/*Con el return enviamos la promesa un nivel arriba del alcance de esta función. Es decir la enviamos a la función anonima de ESTE then, pero no al siguiente*/
	//} 
	
/*La función anonima recibe la promesa de obtenerpersonaje pero tenemos que enviarla al siguiente .then por eso colocamos el return */

//} 