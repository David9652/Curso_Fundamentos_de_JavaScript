const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function getCharacter(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, OPTS, callback).fail(function(){
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

getCharacter(1, function (data) {
    console.log(`Hola, yo soy ${data.name}`)
    getCharacter(2, function (data) {
        console.log(`Hola, yo soy ${data.name}`)
        getCharacter(3, function (data) {
            console.log(`Hola, yo soy ${data.name}`)
            getCharacter(4, function (data) {
                console.log(`Hola, yo soy ${data.name}`)
            })
        })
    } )
})


console.log("Esto se hará primero que la petición")