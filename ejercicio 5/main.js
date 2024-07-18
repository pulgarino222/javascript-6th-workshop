/*En este ejercicio, desarrollarás un script que incluye una función. Esta función debe aceptar un callback y trabajar con una promesa. El objetivo es que el callback se ejecute solo después de que la promesa se haya resuelto, permitiendo entender la relación y el flujo entre operaciones síncronas y asíncronas.
5.1: Definir la función: Vamos a definir una función llamada manejarAsincronia. Esta función aceptará dos parámetros: un callback y una promesa. La función deberá asegurarse de que el callback solo se ejecute una vez que la promesa se haya resuelto.
5.2: Crear la Promesa: Dentro de la función, crearás una promesa que se resuelva automáticamente después de 2 segundos. Puedes usar setTimeout dentro del constructor de la promesa para lograr este comportamiento.
5.3: Ejecutar el Callback: Una vez que la promesa se resuelva, debes ejecutar el callback proporcionado. Este callback simplemente mostrará un mensaje en la consola, por ejemplo: "¡Promesa cumplida y callback ejecutado!".
5.4: Invocar la Función: Después de definir la función, deberás invocarla pasando un callback y la promesa que creaste. Observa cómo el callback solo se ejecuta después de que la promesa se resuelve.
5.5: Despues de invocar la funcion, responde las siguientes preguntas: -¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
solo se demora mas o menos en mostrarse el reultado en consola 
    ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
    ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
    si, si la promesa devuelve algun numero se puede modificar para que haga alguna operacion el callback o se puede modificar para que haga lo que queramos con la informacion que nos devuelva

Nota* Si deseas llevar este ejercicio un paso más allá, modifica la función para que también maneje el rechazo de la promesa. En este caso, el callback debería recibir información sobre si la promesa fue resuelta o rechazada, y mostrar un mensaje adecuado en la consola.*/

// implementamos un sistema de alertas para estilizar nuestro codigo
class Alerts{
    static correctAnswer(){
      let correct=Swal.fire({
            position: "top-end",
            icon: "success",
            title: "tu respuesta fue correcta",
            showConfirmButton: false,
            timer: 1500
          })
          return correct
    
    }

    static wrongAnswer(){
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "tu respuesta es equivocada",
          });
    }

    static explicationAnswer(){
      Swal.fire({
        title: "<strong>HTML <u>explication</u></strong>",
        icon: "info",
        html: `
          You can use <b>bold text</b>,
          <a href="#" autofocus>links</a>,
          and other HTML tags
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });
    }

}
function manejarAsincronismo(promise,callback){
  promise.then((resultado)=>{Alerts.correctAnswer().then(()=>callback(resultado))//recuerde siempre que el .then recibe el resultado de la promesa 

  }).catch((error)=>{//el catch recibe siempre el error de la promesa 
    alert(error)
    Alerts.wrongAnswer()
  })
}

let myPromise=new Promise((resolve, reject) => {
  let answer=prompt("quieres que se cumpla la promesa ¿si o no ?")
  return setTimeout(()=>{
    if(answer==="si"){
      (resolve("¡Promesa cumplida y callback ejecutado!"))
    }else {
    reject("no quisiste que se cumpliera la promesa")}
  },1000)
})

manejarAsincronismo(myPromise,(resultado)=>{
  alert(resultado)
})






