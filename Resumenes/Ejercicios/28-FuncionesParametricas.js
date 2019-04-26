// Declaración de un Prototipo Persona
class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura 
    }
    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre,this.apellido)
        }
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
    saludar (fn) {
        /*
            var {nombre, apellido} = this
            var nombre = this.nombre
            var apellido = this.apellido
        */
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)    
    if(esDev){
        console.log(`No sabía que eras desarrollador@`)
    }

}


var david = new Persona("David","Ángel",1.77)
var daniel = new Desarrollador("Daniel","Ángel",1,74)
david.saludar()
daniel.saludar(responderSaludo)
david.saludar(responderSaludo)

/*
Valores falsy (valores falsos) en Javascript:

false
0
null
""
undefined
NaN

Los demás son valores Truthy (valores verdaderos).
https://developer.mozilla.org/es/docs/Glossary/Truthy

*/