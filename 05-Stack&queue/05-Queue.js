const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  // Tu código aca:
  var tickete=[];
  var ingresados=[];
  var cont=0;
      for( let i =0 ; i<queue.array.length;i++)
      {   
          if(queue.array[i].age >=18 && queue.array[i].ticket.event===event){
            
              //console.log(queue.array[i].fullname)
              if(ingresados.length===0){
                  tickete.push(queue.array[i].ticket.number)
                  ingresados.push(queue.array[i].fullname)
                               
              } else{
                  for (let a = 0; a < tickete.length; a++) {
                      if(tickete[a]===queue.array[i].ticket.number) {
                          cont=100
                      } 
                      else{cont=cont-1}
                  }

                  if(cont<=0){
                  tickete.push(queue.array[i].ticket.number)
                  ingresados.push(queue.array[i].fullname) 
                   }
                   cont=0;  
              } 
    
                  
              
              
          }
          ///queue.array.splice(i,1);
      }
      ///console.log(queue.array)
      
    
   return ingresados; 
  
};
      
  

  module.exports = {
    controlAcces,
   
}