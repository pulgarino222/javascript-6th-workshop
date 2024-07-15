// Definir la función manejarAsincronia
function manejarAsincronia(callback, promesa) {
  // Crear la promesa
  promesa.then(resultado => {
    callback(resultado);
  }).catch(error => {
    console.error('Error:', error);
  });
}

// Crear una promesa que se resuelve automáticamente después de 2 segundos
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("¡Promesa cumplida y callback ejecutado!");
  }, 2000);
});

// Invocar la función pasando el callback y la promesa
manejarAsincronia(resultado => {
  console.log(resultado);
}, miPromesa);
