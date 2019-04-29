// Ejercicio 1    
console.log(`a`)
console.log(`b`)
console.log(`c`)

// a
// b
// c

// Ejercicio 2
console.log(`a`)
setTimeoun(() => console.log(`b`), 2000)
console.log(`c`)

// a
// c
// b [2 segundos después]

// Ejercicio 3
console.log(`a`)
setTimeout(()=> console.log(`b`), 0)
console.log(`c`)
// a
// c
// b [después de finalizado el EventLoop]

/*

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

*/
