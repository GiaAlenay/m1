const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    if(this.head===null){return 0}
    if(this.head.next===null){return 1}

    let recorrer=this.head;
    let cont=1;
    while(recorrer.next!==null){
      cont++
      recorrer=recorrer.next;
    }
    return cont
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  let recorrer=this.head;
  while(recorrer.next!==null){
    if(recorrer.value<recorrer.next.value){
     let varProbi= recorrer.value
     recorrer.value=recorrer.next.value
     recorrer.next.value=varProbi;
     this.orderList()
    }
    else{ recorrer=recorrer.next}
  }
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
  LinkedList.prototype.insert = function(data,pos) {
    let nodoIntroducido= new Node(data);
     let recorrer,previo
     recorrer= this.head;
     if(pos ===1){

         this.head =nodoIntroducido;
         this.head.next=recorrer
     }
     let cont=1
     
     while(cont!==pos){
         previo=recorrer
         cont++
         recorrer=recorrer.next
     }
     nodoIntroducido.next=recorrer
     previo.next=nodoIntroducido;
     
     
}
  




module.exports={
  LinkedList
}



