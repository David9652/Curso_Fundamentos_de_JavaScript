# Sesión 29 - Asincronía en JavaScript

* JavaScript es asíncrono y concurrente 

	* **Asíncrono** &rarr; No ejecuta el código línea a línea porque funciona por medio de la delegación de tareas (capacidad de dar un poder, una función o una responsabilidad a otro proceso para que los ejerza en su lugar). Entre las tareas que se delegan están: Peticiones a Servidores, Interacciones Visuales, Navegación Client-Side, Eventos, etc.

	* **Concurrente** &rarr; Solamente puede ejecutar una acción a la vez. Este modelo de concurrencia es conocido en JavaScript como Event Loop (pieza fundamental que coordina la ejecución, eventos y callbacks).

* Es importante mencionar que **Python** funciona de manera síncrona, es decir, ejecuta el código línea a línea.

* **Paralelismo** hace referencia que se ejecutan múltiples tareas simultáneamente.

* **Call Stack** &rarr Espacio donde se colocan el llamado a las funciones según el orden de ejecucíon de nuestro programa (funciona como una cola FILO).

* **CallBack** &rarr; Función que se ejecutará en un futuro cuando la respuesta del servidor llegue.

* **CallBack Queve** &rarr; Cuado JavaScript termine de hacer sus otras tareas (Call Stack), volverá donde se encuentra la pila de tareas pendientes y pasará esta al Call Stack par que sea ejecutada.

## Material Adicional

* [Call Stack en JavaScript](https://www.youtube.com/watch?v=FzFFTYbYvcw "Call Stack en JavaScript"). 
* [Asincronía en JavaScript](https://www.youtube.com/watch?v=PndHsDpEfhU "Asincronía en JavaScript").
* [Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1232s "Event Loop").
* [Herramienta Event Loop](http://latentflip.com/loupe/ "Herramienta Event Loop").