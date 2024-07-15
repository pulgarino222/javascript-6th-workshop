console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());


  //¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
 // podemos ver que cuando intentamos llama las funciones declaradas antes de inicializarse realmente funciona pero cuando intentamos llamar a las expresadas antes de inicializarlas no funciona esto se da por el hoisting que tienen en cuanto a let var y const

 //¿Cómo difieren los resultados entre la función declarada y la función expresada?
 //podemos ver que las funnciones declaradas tienen un scope global y el hoisting que tienen no afecta a la hora de llamarlas mientras que las expresadas depende del hoisting que tengan se pueden o no acceder a ellas 

 //¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
 //indica que una tiene un hoisting y scope mas global y la otra depende de la variable a la que se le asigne 
