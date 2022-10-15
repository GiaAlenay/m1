// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo
  if(array.length===1){return array[0] }
  else{return array.shift()*producto(array)}
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  //escribe aqui tu codigo 
  for(let prop in obj){
    if(obj[prop]===value)
    {
      //var re=true;
      //console.log(re)
      return true;
      break;
  } 
   if( typeof obj[prop]==='object'){  return isThere(obj[prop],value)}
    
}   

  return false;


};
module.exports = { producto, isThere };
