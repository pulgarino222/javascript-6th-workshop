import { urlRooms } from "./main.js";

let bookings = []; // Inicializa un arreglo vacío para almacenar las reservas.

let unicId = GenerateId();
function GenerateId() {
  let id = 0; // Variable id se inicializa en 0 fuera de la función interna.

  return function () {
    return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve.
  };
}

export function validateAvialability(rooms, numbreOfHabitation) {
  let availability = rooms.find(room => room.number === numbreOfHabitation); // Busca la habitación con el número especificado.
  if (availability) { // Verifica si se encontró la habitación.
    if (availability.availability === true) { // Verifica si la habitación está disponible.
      console.log(`continuando la reserva.... `); // Imprime un mensaje de que se continúa con la reserva.
      return true; // Devuelve true si la habitación está disponible.
    } else {
      console.log(`La habitación no está disponible`); // Imprime un mensaje de que la habitación no está disponible.
      return false; // Devuelve false si la habitación no está disponible.
    }
  } else {
    console.log(`Has ingresado una habitación errada o no existe en nuestro hotel`); // Imprime un mensaje de error si la habitación no existe.
    return false; // Devuelve false si la habitación no existe.
  }
}

export function validateCapacity(rooms, roomTypes, numbreOfHabitation, capacity) {
  const habitationToValidate = rooms.find(room => room.number === numbreOfHabitation); // Busca la habitación con el número especificado.
  if (!habitationToValidate) { // Verifica si se encontró la habitación.
    console.error("No se encontró la habitación especificada."); // Imprime un mensaje de error si no se encontró la habitación.
    return false; // Devuelve false si no se encontró la habitación.
  }

  const typeRoom = roomTypes.find(roomType => roomType.id == habitationToValidate.roomTypeId); // Busca el tipo de habitación correspondiente al roomTypeId de la habitación.
  if (!typeRoom) { // Verifica si se encontró el tipo de habitación.
    console.error("No se encontró el tipo de habitación para la habitación especificada."); // Imprime un mensaje de error si no se encontró el tipo de habitación.
    return false; // Devuelve false si no se encontró el tipo de habitación.
  }

  if (capacity <= typeRoom.capacity) { // Verifica si la capacidad especificada es menor o igual a la capacidad de la habitación.
    return true; // Devuelve true si la capacidad es adecuada.
  } else {
    console.error("Error: La capacidad de la habitación no está hecha para el número de personas que quieres reservar. Reserva cancelada."); // Imprime un mensaje de error si la capacidad no es adecuada.
    return false; // Devuelve false si la capacidad no es adecuada.
  }
}

export function addNewBooking(numberEntered, capacity) {
  let data = { // Crea un objeto data con los detalles de la nueva reserva.
    "id": unicId(), // Genera un ID único para la reserva.
    "numberRoom": numberEntered, // Asigna el número de habitación ingresado.
    "totalPersons": capacity,
    "dateStart": new Date(prompt("ingresa la fecha de inicio reserva. Ejemplo: dd-mm-yyyy")), // Pide y asigna la fecha de inicio de la reserva.
    "dateEnd": new Date(prompt("ingresa la fecha de terminacion de reserva. ejemplo: dd-mm-yyyy")), // Pide y asigna la fecha de fin de la reserva.
  };

  bookings.push(data);
  changeAvaliable(numberEntered) // Cambia la disponibilidad de la habitación una vez agregada la reserva.
    .then(() => console.log('Reserva creada y disponibilidad actualizada.'))
    .catch(error => console.error('Error al actualizar la disponibilidad:', error));
}

export function viewAllBooking() {
  bookings.forEach(booking => {
    console.table(booking);
  });
}

function changeAvaliable(numberRoom) {
    return fetch(`${urlRooms}?number=${numberRoom}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          console.log(`La habitación con el número ${numberRoom} no existe.`);
          return Promise.reject('La habitación no existe.');
        }
  
        const room = data[0]; // Suponemos que el número de habitación es único
        const newAvailability = !room.availability;
  
        // Realiza una solicitud PATCH para actualizar la disponibilidad de la habitación
        return fetch(`${urlRooms}/${room.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ availability: newAvailability }) // Solo actualiza la propiedad 'availability'
        });
      })
      .then(response => {
        if (response.ok) {
          console.log(`La disponibilidad de la habitación ha sido cambiada.`);
        } else {
          console.error('Error al actualizar la disponibilidad en el servidor:', response.statusText);
        }
      })
      .catch(error => console.error('Error al obtener o actualizar la habitación:', error));
  }

// Función para eliminar una reserva
export function removeBooking(bookingId) {
    // Busca la reserva con el ID proporcionado
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      console.error('Reserva no encontrada.');
      return;
    }
    
    // Obtiene el número de habitación de la reserva que se va a eliminar
    const numberRoom = bookings[bookingIndex].numberRoom;
    
    // Elimina la reserva del arreglo
    bookings.splice(bookingIndex, 1);
    
    // Cambia la disponibilidad de la habitación correspondiente
    changeAvaliable(numberRoom)
      .then(() => console.log(`Reserva con ID ${bookingId} ha sido eliminada.`))
      .catch(error => console.error('Error al actualizar la disponibilidad:', error));
}
