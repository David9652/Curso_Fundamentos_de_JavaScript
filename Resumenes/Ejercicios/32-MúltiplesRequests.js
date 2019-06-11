const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }


const onPeopleResponse = function (data) {
    console.log(`Hola, yo soy ${data.name}`)
    console.log(arguments)
}

function getCharacter(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, OPTS, onPeopleResponse)
}

// No sabemos en qué orden nos llegará las respuestas (múltiples métodos asincrónicos), depende del servidor y de cuánto tarde en responder los requests
getCharacter(1)
getCharacter(2)
getCharacter(3)

console.log("Esto se hará primero que la petición")