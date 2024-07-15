function crearContador() {
    let valor = 0; // Variable privada para almacenar el valor del contador
  
    return {
      incrementar: function() {
        valor++;
      },
      obtenerValor: function() {
        return valor;
      }
    };
  }
  
  function interactuarConContador() {
    const contador = crearContador();
    let continuar = true;
  
    while (continuar) {
      let opcion = prompt(`El valor actual del contador es: ${contador.obtenerValor()}. ¿Deseas incrementarlo? (si/salir)`);
  
      if (opcion === "si") {
        contador.incrementar();
      } else if (opcion === "salir" || opcion === null) {
        continuar = false;
      } else {
        // Opción inválida, no hacemos nada y continuamos el bucle
        alert("Opción inválida. Por favor, ingresa 'Sí' para incrementar, 'No' para mantener el valor actual, o 'Salir' para terminar.");
      }
    }
  
    alert(`Finalizando. El valor final del contador es: ${contador.obtenerValor()}.`);
  }
  
  // Llamar a la función principal para interactuar con el contador
  interactuarConContador();
  