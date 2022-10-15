
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    var newArray=[];
    for (let i = 0; i < array.length; i++) {
        if( array[i]<10){
            newArray.unshift(array[i])
        }
        
    }
    return newArray;
};



function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

     var num=0;
     var me= array2[0] ;
   for (let i = 0; i < array1.length; i++) {
       
       for (let a = 0; a < array2.length; a++) {
           
           if(array1[i]=== array2[a]){num= array1[i]}
           if(me>array2[a]){me=array2[a]}
       }
       
       if(me>array1[i]){me=array1[i]}
   }
if(num!==0){return num;}
else{return me;}

};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro
    // del array que retornan.
    var newArray=[];
    var newNum=0;
    for (let i = 0; i < array.length; i++) {
        if( Array.isArray(array[i])===true){
            for (let a = 0; a < array[i].length; a++) {
                newNum = newNum +array[i][a];
                
            }
            newArray.push(newNum);
            newNum=0;
        }
        else{newArray.push(array[i]);}
    }
   return newArray
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    var newArray=[];
    if(numero%divisor===0){
        let result=numero/divisor
        for(let i =0; i<divisor;i++){
            newArray.push(result);
        }
        return newArray;
    }else{return false}

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    let newArray=[];
    let newMa=0;
    let newMe=array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]>=newMa){newMa=array[i];}
        else{if(array[i]<=newMe){newMe=array[i]}
                else{newMe=newMe}}
        
    }
    newArray.push(newMe);
    newArray.push(newMa);

    return newArray;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};