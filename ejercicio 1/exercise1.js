//#### Ejercicio 1: El quiz del Scope.

//- Considera el siguiente codigo:



class Answers{


    static correctAnswer(){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          })
    
    }

    static wrongAnswer(){
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

}





//this just one sistem of alerts that import to sweetalert.com
Swal.fire({
    title: "Sweet!",
    text: "comienza el juego vas a adivinar si es posible acceder a cada una de las variables",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  })
    let answerglobal =prompt("es posible acceder a una variable global fuera de la funcion ¿si o no?")
    

    if(answerglobal==="si"){
        Answers.correctAnswer().then()
        testScope()
    }else {
        Answers.wrongAnswer()
    }

    




 
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

  console.log("Fuera de la función:", globalVariable);
  testScope();





  

//- **Interacción del Usuario:** El script solicitará, a través de un prompt, que el usuario adivine si es posible acceder a cada una de las variables (globalVariable, functionVariable, blockVariable) en diferentes partes del código.

//- **Respuesta del Usuario:** Deberás ingresar tus respuestas en el prompt() indicando si crees que el acceso a cada variable es posible y por qué.

//- **Validación de Respuestas:** Después de ingresar tus respuestas, el script evaluará y mostrará si cada una de ellas es correcta o incorrecta, y proporcionará una explicación detallada de los resultados.

