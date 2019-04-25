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