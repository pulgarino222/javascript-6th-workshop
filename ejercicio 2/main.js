// Interacción con el usuario - Predicciones
var predA = prompt("Predice el valor de a:");
var predB = prompt("Predice el valor de b:");
var predC = prompt("Predice el valor de c:");
var predFuncDeclarada = prompt("Predice el resultado de funcionDeclarada():");
var predFuncExpresada = prompt("Predice el resultado de funcionExpresada():");

// Vars call - Intento de acceder a las variables antes de su declaración
console.log("Valor de a:", a); // undefined
console.log("Valor de b:", b); // ReferenceError: b is not defined
console.log("Valor de c:", c); // ReferenceError: c is not defined

// Functions call - Intento de llamar a las funciones antes de su declaración
console.log("Resultado de funcionDeclarada:", funcionDeclarada()); // "Función declarada ha sido llamada."
console.log("Resultado de funcionExpresada:", funcionExpresada()); // TypeError: funcionExpresada is not a function

// Vars declaration
var a = 1;
let b = 2;
const c = 3;

// Functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

// Mostrar predicciones y explicaciones
console.log("\n=== Predicciones y Resultados ===");
console.log("Predicción para a:", predA, "- Resultado real:", a);
console.log("Predicción para b:", predB, "- Resultado real: Error - b is not defined");
console.log("Predicción para c:", predC, "- Resultado real: Error - c is not defined");
console.log("Predicción para funcionDeclarada:", predFuncDeclarada, "- Resultado real:", funcionDeclarada());
console.log("Predicción para funcionExpresada:", predFuncExpresada, "- Resultado real: Error - funcionExpresada is not a function");
