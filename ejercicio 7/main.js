// Mensaje inicial para el usuario
console.log("A continuación verás un código. Por favor, intenta predecir el orden en que aparecerán los mensajes en la consola.");

// Código a mostrar al usuario
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

// Función para pedir la predicción y mostrar resultados
function preguntarPrediccion() {
  // Preguntar al usuario su predicción
  let respuesta = prompt("¿En qué orden crees que se mostrarán los mensajes? Por favor, escribe el orden exacto separado por comas (por ejemplo, 'Inicio del script, Primer setTimeout, Segundo setTimeout, Promesa resuelta, Fin del script'):");

  // Convertir la respuesta del usuario en un array limpio
  let predicciones = respuesta.split(",").map(item => item.trim());

  // Orden real de los mensajes
  let ordenReal = [
    "Inicio del script",
    "Fin del script",
    "Primer setTimeout",
    "Segundo setTimeout",
    "Promesa resuelta"
  ];

  // Comparar la predicción del usuario con el orden real
  let aciertos = 0;
  let errores = [];

  for (let i = 0; i < ordenReal.length; i++) {
    if (predicciones[i] === ordenReal[i]) {
      aciertos++;
    } else {
      errores.push({
        paso: i + 1,
        predicción: predicciones[i],
        real: ordenReal[i]
      });
    }
  }

  // Mostrar resultados al usuario
  if (aciertos === ordenReal.length) {
    console.log("¡Felicidades! Has acertado el orden en que se muestran los mensajes.");
  } else if (errores.length === 1) {
    console.log("Has cometido un error en el paso:");
    console.log(`- Predijiste '${errores[0].predicción}', pero debería ser '${errores[0].real}'.`);
  } else {
    console.log("Has cometido errores en los siguientes pasos:");
    for (let error of errores) {
      console.log(`- Paso ${error.paso}: Predijiste '${error.predicción}', pero debería ser '${error.real}'.`);
    }
  }
}

// Llamar a la función para pedir la predicción al usuario
preguntarPrediccion();
