


const urlRooms = "http://localhost:3000/rooms";
const urlRoomTypes = "http://localhost:3000/roomTypes";
const secondsForViewInformation=5

 


function mostrarData(){
     return Promise.all([new Promise((resolve, reject) => {
       return  setTimeout(()=>{
            fetch(urlRoomTypes).then((dataTypesOfRoom)=>{
                if(!dataTypesOfRoom.ok){
                    throw new Error(`no se obtuvo la informacion de el endpoint roomTypes ${dataTypesOfRoom.status}`)
                }else{
                    return resolve(dataTypesOfRoom.json())
                }
            }).catch(error=>{
                reject(`ah ocurrido un  error, ${error}`)
            })
        },1000*secondsForViewInformation)
        
    }),new Promise((resolve, reject) => {
        return setTimeout(()=>{
            fetch(urlRooms).then((dataRooms)=>{
                if(!dataRooms.ok){
                    throw new Error(`ah ocurrido un error obteniendo la informacion de la base de datos ${dataRooms.status}`)
                }else{
                    return resolve(dataRooms.json())
                }
            }).catch(error=>{
                reject(`ah ocurrido un error con url rooms ${error}`)
            })
        },1000*secondsForViewInformation)
        
    })])
}
mostrarData().then((data)=>{
    console.table(data[0])
    console.table(data[1])
    while(true){
        const userInput = parseInt(prompt(
            "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Salir"
          ))
          if(userInput===1){
            validateAvialability(data[1])
          }else if(userInput===4){
            alert("gracias hasta luego ")
            break
          }
    }
}
)





 


























// // Función para cargar y mostrar el contenido de ambos endpoints
// function cargarYMostrarData() {
//   // Retorna una nueva promesa que se resuelve después del setTimeout
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Realiza ambas solicitudes fetch en paralelo
//       Promise.all([fetch(urlRooms), fetch(urlRoomTypes)])
//         .then((responses) => {
//           // Verifica que ambas respuestas sean exitosas
//           responses.forEach((response) => {
//             if (!response.ok) {
//               throw new Error("Error al cargar los datos.");
//             }
//           });

//           // Convierte ambas respuestas a JSON
//           return Promise.all(responses.map((response) => response.json()));
//         })
//         .then((data) => {
//           console.log("Data recibida de rooms:", data[0]);
//           console.log("Data recibida de roomTypes:", data[1]);

//           const rooms = data[0];
//           const roomTypes = data[1];

//           console.log("Habitaciones:", rooms);
//           console.log("Tipos de Habitaciones:", roomTypes);
//           resolve({ rooms, roomTypes }); // Resuelve la promesa con los datos cargados
//         })
//         .catch((error) => {
//           console.error(error);
//           reject(error); // Rechaza la promesa si hay un error
//         });
//     }, 3000);
//   });
// }

// cargarYMostrarData()
//   .then((data) => {
//     console.log("Datos cargados:", data);
//   })
//   .catch((error) => {
//     console.error("Error al cargar los datos:", error);
//   });




















// Llamar a la función para cargar y mostrar el contenido de data.json
// cargarYMostrarData()
//   .then(({ rooms, roomTypes }) => {
//     // Mostrar el contenido de las habitaciones después de cargar los datos

//     // ... Continuar con la lógica de la app
//     while (true) {
//       const userInput = prompt(
//         "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Salir"
//       );
//       switch (userInput) {
//         case "1":
//           const userInput2 = prompt(
//             "Ingrese el numero de habitacion a reservar: " +
//               rooms
//                 .map((room) => {
//                   return `\nRoom Number: ${room.number} (${
//                     roomTypes.find((type) => type.id === room.roomTypeId).name
//                   })`;
//                 })
//                 .join(", ")
//           );
//           break;
//         case "2":
//           // Lógica para ver reservas actuales
//           break;
//         case "3":
//           // Lógica para cancelar reservas
//           break;
//         case "4":
//           // Salir del programa
//           return;
//         default:
//           console.log("Opción inválida. Inténtalo de nuevo.");
//       }
//     }
//   })
//   .catch((error) => {
//     console.error("Error al manejar la promesa:", error);
//   });

