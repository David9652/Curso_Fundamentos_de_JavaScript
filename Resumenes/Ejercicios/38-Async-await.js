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

async function getCharacters() {
    debugger
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promises = ids.map( id => getCharacter(id))
    try {
        var characters = await Promise.all(promises)
        console.log(characters)
    } catch (id) {
        onError(id)
    }
    console.log("Await para la ejecución del programa")   
}

getCharacters()

/*
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
*/
