// Declaración de un Prototipo
function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura 
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    this.altura > 1.75 ? console.log("Soy muy alto") : ""
}

var david = new Persona("David","Ángel",1.77)
david.saludar()
david.soyAlto()

/*
Window es el objeto global dentro del navegador.

El principal error en JS es Cuando this no es lo que esperamos.

En las Arrow functions, se asigna la función, pero cambia el this dentro de la función, ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.

Para comprobarlo en consola:

this === window

Tanto Arrow Functions como lLambdas carecen de referencia this

*/