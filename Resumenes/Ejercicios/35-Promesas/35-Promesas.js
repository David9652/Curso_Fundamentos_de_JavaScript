/*
Las promesas funcionan de manera asíncrona, pero no siempre es así. Una promesa puede resolverse de manera síncrona, es decir, resolver una promesa que devuleva un número sin realizar ninguna tarea asíncrona.

Polyfills --> https://stackoverflow.com/questions/7087331/what-is-the-meaning-of-polyfills-in-html5
*/

const API_URL = 'https://swapi.co/api/'
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

getCharacter(1834884)
    .then(function (character) {
        console.log(`El personaje  es ${character.name}`)  
    })
    .catch(onError)

console.log("Esto se hará primero que la petición")