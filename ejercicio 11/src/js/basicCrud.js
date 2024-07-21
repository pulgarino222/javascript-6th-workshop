/*Reservas: Cada reserva debe tener un número único, el número de habitación reservada, la fecha de inicio y fin de la reserva, el nombre completo (nombre y apellido) del huésped en minúsculas y la cantidad de huéspedes.*/

let bookings =[]

function GenerateId() {
    let id = 1; // Variable id se inicializa fuera de la función interna

    return function () {
      return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
    };
  }


  
  function validateAvialability(rooms){
    let numbreOfHabitation= parseInt(prompt("ingresa el numero de habitacion que deseas reservar"))
    let availability
    for (let i = 0; i < rooms.length; i++) {
        if ((rooms[i].number===numbreOfHabitation)&&(rooms[i].availability===true)) {
            console.log("la habitacion si esta disponible" ) 
            availability=true
            break
        }else if(((rooms[i].number===numbreOfHabitation)&&(rooms[i].availability===false))){
            console.log("la habitacion no esta disponible")
            availability=false
            break
        }else if(rooms[i].number!=numbreOfHabitation){
            console.log("ingresaste un dato invalido o habitacion inexistente ")
        }  
    }
    return availability
}

function addNewBooking(){
    


}
