// Declaración de un Prototipo Persona
class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura 
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto () {
        this.altura > 1.75 ? console.log("Soy muy alto") : ""
    }
}

// Declaración de un Prototipo Desarrollador
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }
}

var david = new Persona("David","Ángel",1.77)
var daniel = new Desarrollador("Daniel","Ángel")
david.saludar()
david.soyAlto()
daniel.saludar()

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes
// https://medium.com/@jmz12/usando-clases-en-javascript-e07f0e25c67d