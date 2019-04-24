var johnny = {
  nombre: 'Johnny',
  apellido: 'Ber',
  edad: 16,
  ingeniero: true,
  cosinero: false,
  canante: false,
  dj: false,
  guitarista: true,
  drone: false,
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre}`)

    if (persona.ingeniero) {
        console.log('es: Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }

    if (persona.cosinero) {
        console.log('es: Cocinero')
    } else {
        console.log('No es Cocinero')
    }

    if (persona.cantante) {
        console.log('es: Cantante')
    } else {
        console.log('No es Cantante')
    }

    if (persona.dj) {
        console.log('es: Dj')
    } else {
        console.log('No es Dj')
    }

    if (persona.guitarista) {
        console.log('es: Guitarrista')
    } else {
        console.log('No es Guitarrista')
    }

    if (persona.drone) {
        console.log('es: Piloto de Drone')
    } else {
        console.log('No pilotea drones')
    }
}

imprimirProfesiones(johnny)

const MAYOR_EDAD = 18

/*
Constante asignada como función
const esMayorDeEdad = function (persona){
    return persona.edad >= MAYOR_EDAD
}
Arrow Function
const esMayorDeEdad = persona => persona.edad >= MAYOR_EDAD
*/

const esMayorDeEdad = ({edad}) => edad >= MAYOR_EDAD
const permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ? console.log("ACCESO DENEGADO") : console.log("ACCESO PERMITIDO")

function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad},`)
  
    if (esMayorDeEdad(persona)) {
        console.log('es mayor de edad')
    }
    else{
        console.log('es menor de edad')
    }
  }

imprimirSiEsMayorDeEdad(johnny)
permitirAcceso(johnny)