//#### Ejercicio 1: El quiz del Scope.
//sistema de alertas por si se va a pasar de la consola al DOOM




// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}



// Interacción del Usuario
// El script solicita al usuario que adivine si puede acceder a las variables en diferentes partes del código.
let respuestaGlobal = prompt("¿Puedes acceder a globalVariable? (Sí/No) Por qué?");
let respuestaFuncion = prompt("¿Puedes acceder a functionVariable? (Sí/No) Por qué?");
let respuestaBloque = prompt("¿Puedes acceder a blockVariable? (Sí/No) Por qué?");

// Validación de Respuestas
// Evaluar respuestas y mostrar resultados
if (respuestaGlobal.toLowerCase() === "sí") {
  
  console.log("Respuesta correcta para globalVariable.");
} else {
  console.log("Respuesta incorrecta para globalVariable.");
  console.log("globalVariable es una variable global, por lo que es accesible desde cualquier parte del código.");
}

if (respuestaFuncion.toLowerCase() === "sí") {
  console.log("Respuesta correcta para functionVariable.");
} else {
  console.log("Respuesta incorrecta para functionVariable.");
  console.log("functionVariable está declarada dentro de la función testScope(), por lo que solo es accesible dentro de esa función.");
}

if (respuestaBloque.toLowerCase() === "no") {
  console.log("Respuesta correcta para blockVariable.");
} else {
  console.log("Respuesta incorrecta para blockVariable.");
  console.log("blockVariable está declarada con let dentro de un bloque if {}, por lo que solo es accesible dentro de ese bloque.");
}


console.log("Ejecutando testScope():");
testScope();



// class Alerts{
//     static correctAnswer(){
//       let correct=Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "tu respuesta fue correcta",
//             showConfirmButton: false,
//             timer: 1500
//           })
//           return correct
    
//     }

//     static wrongAnswer(){
//          Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "tu respuesta es equivocada",
//           });
//     }

//     static explicationAnswer(){
//       Swal.fire({
//         title: "<strong>HTML <u>explication</u></strong>",
//         icon: "info",
//         html: `
//           You can use <b>bold text</b>,
//           <a href="#" autofocus>links</a>,
//           and other HTML tags
//         `,
//         showCloseButton: true,
//         showCancelButton: true,
//         focusConfirm: false,
//         confirmButtonText: `
//           <i class="fa fa-thumbs-up"></i> Great!
//         `,
//         confirmButtonAriaLabel: "Thumbs up, great!",
//         cancelButtonText: `
//           <i class="fa fa-thumbs-down"></i>
//         `,
//         cancelButtonAriaLabel: "Thumbs down"
//       });
//     }

// }






  

//- **Interacción del Usuario:** El script solicitará, a través de un prompt, que el usuario adivine si es posible acceder a cada una de las variables (globalVariable, functionVariable, blockVariable) en diferentes partes del código.

//- **Respuesta del Usuario:** Deberás ingresar tus respuestas en el prompt() indicando si crees que el acceso a cada variable es posible y por qué.

//- **Validación de Respuestas:** Después de ingresar tus respuestas, el script evaluará y mostrará si cada una de ellas es correcta o incorrecta, y proporcionará una explicación detallada de los resultados.

