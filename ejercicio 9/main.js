// Función para esperar n segundos usando setTimeout y promesas
function esperarYSaludar(segundos) {
    return new Promise((resolve, reject) => {
      if (segundos <= 0 || isNaN(segundos)) {
        reject(new Error("Por favor, ingresa un número válido de segundos mayor que cero."));
      } else {
        setTimeout(() => {
          resolve(`¡Han pasado ${segundos} segundos!`);
        }, segundos * 1000);
      }
    });
  }
  
  // Función para cargar datos usando fetch
  function cargarDatosDesdeURL(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('¡Hubo un problema con la petición fetch:', error.message);
      });
  }
  
  // Función principal para la interacción con el usuario
  function interactuarConUsuario() {
    let segundos = prompt("Ingresa la cantidad de segundos después de los cuales quieres que se muestre un mensaje:");
  
    esperarYSaludar(segundos)
      .then(mensaje => {
        console.log(mensaje);
        return cargarDatosDesdeURL('https://jsonplaceholder.typicode.com/posts');
      })
      .then(data => {
        console.log("Datos cargados exitosamente:");
        console.log(data);
      })
      .catch(error => {
        console.error('¡Hubo un problema:', error);
      });
  }
  
  // Llamar a la función principal para interactuar con el usuario
  interactuarConUsuario();
  