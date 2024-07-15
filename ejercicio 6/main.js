console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);
//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?

//Esto es debido a cómo funciona el event loop en JavaScript. Aunque setTimeout se establece para ejecutarse después de 0 segundos, el callback asociado se coloca en la cola de tareas y se ejecuta después de que se completa el código síncrono actual y cualquier tarea de microtarea (como las resoluciones de promesas).
//¿Qué nos dice este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

//El event loop de JavaScript gestiona las operaciones asíncronas asegurando que las tareas se manejen de manera eficiente sin bloquear el hilo principal.
//Las macro tareas (como setTimeout) se colocan en la cola de tareas y se ejecutan después de que se completan todas las micro tareas pendientes.
//Este enfoque permite a JavaScript manejar operaciones asíncronas de manera ordenada y predecible, crucial para aplicaciones web interactivas y responsivas.