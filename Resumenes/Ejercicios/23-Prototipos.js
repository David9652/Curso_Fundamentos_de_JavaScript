// Creación de un Prototipo
function Persona(nombre,apellido,edad,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura 
    console.log(`Mi edad es ${this.edad}`)
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
}

Persona.prototype.soyAlto = function () {
    if(this.altura > 1.75){
        console.log("Soy muy alto")
    }
    
}

// Utilizando new se crea un nuevo objeto, de lo contrario, haría un llamado a la función
var david = new Persona("David","Ángel",23,1.77)
david.saludar()
david.soyAlto()

var daniel = {
    nombre: "Daniel",
    apellido: "Ángel",
    edad: 16
}

/*
- Hablar de objetos en javascript es hablar de prototipos.
- this hace referencia al nuevo objeto que se acaba de crear.
- la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
- La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
*/