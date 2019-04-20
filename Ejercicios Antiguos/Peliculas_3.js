// Sesión 3 - ¿Quiénes pueden pasar a ver una película? Ejercicio con condicionales, expresiones y booleanos

const movie = "Indiana Jones";
const PG_Movie = 13;

const Name_David = "David";
const Age_David = 22;

const Name_Carlos = "Carlos";
const Age_Carlos = 12;

function Can_Watch_Movie (name, age, is_With_Adult = false){
    if (age >= PG_Movie){
        alert(`${name} puede ver ${movie}`);
    }
    else if (is_With_Adult){
        alert(`${name} puede pasar a ver ${movie}. Aunque su edad es ${age}, está acompañado(a) por un adulto.`);
    }
    else{
        alert(`${name} no puede ver ${movie}. Tiene ${age} años y necesita al menos tener ${PG_Movie} años`);
    }
}

Can_Watch_Movie(Name_David,Age_David);
Can_Watch_Movie(Name_Carlos,Age_Carlos,true);

// Si el valor de una variable es un undefined lo toma por defecto como FALSE
// Reasignar el valor a una constante en JS es un error
/* No es necesario reescribir “const” para cada valor, simplemente con separarlos por medio de una coma es posible definir
 otra variable del mismo tipo. Y para indicar que es la ultima constante se usa punto y coma */
/*
< menor que
> mayor que
<= menor o igual
>= mayor o igual
== igual valor
!= diferente
=== igual valor y tipo de variable
&& and
|| or
*/

// Desafío - Sesión 3 - ¿Quiénes pueden pasar a ver una película? Ejercicio con condicionales, expresiones y booleanos

const movie = "Indiana Jones";
const PG_Movie = 13;

const Name_David = "David";
const Age_David = 22;

const Name_Carlos = "Carlos";
const Age_Carlos = 12;

const Can_Watch_Movie = (name, age, is_With_Adult = false) => {

    if (age >= PG_Movie){
        alert(`${name} puede ver ${movie}`);
    }
    else if (is_With_Adult){
        alert(`${name} puede pasar a ver ${movie}. Aunque su edad es ${age}, está acompañado(a) por un adulto.`);
    }
    else{
        alert(`${name} no puede ver ${movie}. Tiene ${age} años y necesita al menos tener ${PG_Movie} años`);
    }

}

Can_Watch_Movie(Name_David,Age_David);
Can_Watch_Movie(Name_Carlos,Age_Carlos,true);

// Sesión 3 - ¿Quiénes pueden pasar a ver una película? Ejercicio con condicionales, expresiones y booleanos - Ejercicio con objetos

//Crear un objeto de la pelicula
let pelicula = {
	name : 'Star Wars: El Despertar de la fuerza',
	pg : 13
}
//Crear objeto de cliente
let cliente = {
	name : 'Pedro Hincapie',
	age : 12,
	isWithAdult : false
}
//Funcion encargada de las validaciones para el acceso del cliente a la sala de cine de SACHA@colombia
const accederCine = (pelicula, cliente) => {
	if(cliente.age >= pelicula.pg){
		alert(`${cliente.name} puede pasar a ver la pelicula ${pelicula.name}`);
	}else if(cliente.isWithAdult){
		alert(`${cliente.name} puede pasar a ver la pelicula ${pelicula.name}
			por que esta siendo acompañado por un adulto responsable`);
	}else{
		alert(`${cliente.name} no puede pasar a ver la pelicula ${pelicula.name}
			por que tiene ${cliente.age} y debe tener ${pelicula.pg}`);
	}
}

accederCine(pelicula, cliente);