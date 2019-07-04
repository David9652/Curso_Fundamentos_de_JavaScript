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

var ids = [1, 2, 3, 4, 5, 6, 7]
/*
var promesas = ids.map(function (id) {
    return getCharacter(id)   
})
*/
var promises =  ids.map( id => getCharacter(id))
Promise
    .all(promises)
    .then(characters => console.log(characters))
    .catch(onError)

console.log("Esto se hará primero que la petición")

/*
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.
*/