function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
if(time[time.length-2]==="P"){
      
    var na = time.replace("PM","")
    
    var camb=parseInt(time[0]+time[1],10);
    if(camb=="12"){return na;}
    else{
    camb=camb+12;
    var fin= na.replace(time[0]+time[1], camb)
    return fin}
    }
    else if(time[time.length-2]==="A"){
      var na = time.replace("AM","")
      var camb=parseInt(time[0]+time[1],10);
      if(camb=="12"){camb="00";
        var fin= na.replace(time[0]+time[1], camb)
        
    return fin
    }else{
      return na}
    }
}

module.exports = {
    timeConversion
}