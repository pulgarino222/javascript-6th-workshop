// 3.1 Creación de la Función con Closure
function crearSumador(numInicial) {
    return function(sumando) {
      return numInicial + sumando;
    };
  }
  
  // 3.2 Uso de la Función y Observación de Closures
  // Invocar crearSumador() con un número específico
  const sumarCinco = crearSumador(5);
  
  // Uso de sumarCinco() para sumar otro número
  const resultado = sumarCinco(3);
  
  // 3.3 Ejecución y Análisis
  console.log("El resultado de sumar 5 + 3 es:", resultado); // Debería mostrar 8
  

 // En JavaScript, las funciones mantienen su acceso a variables externas después de que la función externa ha terminado de ejecutarse debido al concepto de closures. Aquí te explico cómo funciona este mecanismo:

//1. Contexto de Ejecución y Scope
//En JavaScript, cada vez que se ejecuta una función, se crea un nuevo contexto de ejecución que incluye un scope. El scope determina la visibilidad y accesibilidad de variables durante la ejecución de una función.

//2. Cómo Funcionan los Closures
//Un closure es la combinación de una función y el entorno léxico en el cual se declaró esa función. Esto significa que una función interna (función hija) tiene acceso no solo a sus propias variables y parámetros, sino también a las variables y parámetros de la función externa (función padre) en la que fue declarada, incluso después de que la función externa haya finalizado su ejecución.

//3. Mecanismo de Retención del Scope
//Cuando una función interna se define dentro de otra función en JavaScript, la función interna retiene el scope de la función externa en el momento de su definición. Esto significa que:

//Variables Externas: La función interna puede acceder y modificar las variables de la función externa, incluso cuando la función externa ya no está activa.

//Referencia Persistente: La función interna mantiene una referencia al entorno léxico (scope) de la función externa en la que se definió, permitiéndole acceder a esos valores en cualquier momento.