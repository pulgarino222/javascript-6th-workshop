# solucion punto 10


capturas de inicion de script steep 1
![image](https://github.com/user-attachments/assets/0b7b5581-f1a4-4906-9d8a-1543bb7f45e8)


![image](https://github.com/user-attachments/assets/9c83c0ac-e48b-4888-8093-c19bc511597e)

![image](https://github.com/user-attachments/assets/c25ac601-5a03-4722-9d22-0f3b8fbcc1e7)

![image](https://github.com/user-attachments/assets/c4dfbc8d-fbdb-46cb-8b01-dd9e7965cf81)

![image](https://github.com/user-attachments/assets/43188b64-4e43-4511-b09d-5fbb3f98366c)


![image](https://github.com/user-attachments/assets/ebeabd1e-a3da-43a0-954c-b610b8128fcc)


![image](https://github.com/user-attachments/assets/f807fe04-48f7-4dd7-b22f-fbe25d046222)



## Comportamiento de Macrotareas y Microtareas en JavaScript

### Tareas en el Código Proporcionado

El código dado ejemplifica cómo JavaScript gestiona las macrotareas y microtareas con `setTimeout` y promesas:

```javascript
console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");
```

### Respuestas a las Preguntas:

1. **¿Qué tareas se consideran macrotareas y cuáles son microtareas?**
   - **Macrotareas**: Las tareas programadas con `setTimeout` son macrotareas. En este caso:
     - `setTimeout(() => {...}, 1000)`
     - `setTimeout(() => {...}, 0)`
   - **Microtareas**: Las funciones `.then()` en las promesas son microtareas. En este caso:
     - Las funciones `.then()` dentro de las promesas `Promise.resolve()`.

2. **¿Cómo se relacionan las macrotareas y microtareas con el event loop?**
   - El event loop maneja las macrotareas y microtareas de manera secuencial.
   - Las macrotareas se ejecutan después de que la pila de ejecución principal esté vacía.
   - Las microtareas se ejecutan después de que se resuelvan las promesas y antes de que se manejen las próximas macrotareas.

3. **¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?**
   - La nueva macrotarea se encola después de que se ejecuten todas las microtareas pendientes.
   - La ejecución de esta nueva macrotarea puede retrasarse si hay otras macrotareas programadas antes en la cola de macrotareas.

4. **¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?**
   - **Promesas**: Las promesas se manejan como microtareas, lo que garantiza que su ejecución se realice de manera ordenada y predecible.
   - **setTimeout**: Las funciones programadas con `setTimeout` se manejan como macrotareas y se ejecutan después de que se completan todas las operaciones sincrónicas y las microtareas pendientes.

Este comportamiento asegura que JavaScript maneje eficientemente las operaciones asíncronas, manteniendo la respuesta fluida de las aplicaciones y evitando bloqueos en la interfaz de usuario.
```


