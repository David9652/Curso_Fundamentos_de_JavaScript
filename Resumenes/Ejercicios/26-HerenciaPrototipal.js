// Declaración Herencia Prototipal
function HeredaDe(childPrototype, fatherPrototype){
    var fn = function () {}
    fn.prototype = fatherPrototype.prototype
    childPrototype.prototype = new fn()
    childPrototype.prototype.constructor = childPrototype
}

// Declaración de un Prototipo Persona
function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura 
}

// Modificación Prototipo Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    this.altura > 1.75 ? console.log("Soy muy alto") : ""
}

// Declaración de un Prototipo Desarrollador
function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

// Llamado Función Herencia Prototipal
HeredaDe(Desarrollador,Persona)

// Modificación Prototipo Desarrollador
Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
}

var david = new Persona("David","Ángel",1.77)
var daniel = new Desarrollador("Daniel","Ángel")
david.saludar()
david.soyAlto()
daniel.saludar()

/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos. */