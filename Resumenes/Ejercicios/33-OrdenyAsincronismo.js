const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function getCharacter(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, OPTS,  function (data) {
        console.log(`Hola, yo soy ${data.name}`)
        console.log(arguments)
        if(callback){
            callback()
        }
    })
}

/*
Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.
*/

/*
Debemos poner el parámetro como función anónima para que esta sea ejecutada después de traer la respuesta (callback), de lo contrario, esta se ejecutará inmediatamente. Debido a lo anterior, es importante tener la declaración de la función o la referencia a la misma para que esta no se ejecute.
getCharacter(1,function () {}) - getCharacter(1, getCharacter(2))
*/

getCharacter(1, function () {
    getCharacter(2, function () {
        getCharacter(3)
    } )
})


console.log("Esto se hará primero que la petición")
