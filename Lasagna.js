const EXPECTED_MINUTES_IN_OVEN= 40;
/*2. Calcula el tiempo restante del horno en minutos.
Implemente la remainingMinutesInOvenfunción que toma los minutos reales que la lasaña ha estado en el horno como parámetro y devuelve cuántos minutos aún le quedan a la lasaña en el horno, en función del tiempo de horno esperado en minutos de la tarea anterior */
function remainingMinutesInOvenfunción(minutes){
 minutes= prompt("¿Cuantos minutos lleva la lasagna en el horno?");
 let minutesInOven =EXPECTED_MINUTES_IN_OVEN-minutes
 alert(minutesInOven);
}

//remainingMinutesInOvenfunción();

/*3. Calcula el tiempo de preparación en minutos
Implementa la preparationTimeInMinutesfunción que toma la cantidad de capas que agregaste a la lasaña como parámetro y devuelve cuántos minutos tardaste en preparar la lasaña, asumiendo que cada capa tarda 2 minutos en prepararse.*/
function preparetionTimeInMinutes(capa){
capa=prompt("¿Cuantas capas tiene su lasagna?")
preparetionTime=capa*2
alert("El tiempo de preparacion fue de "+preparetionTime+" minutos")
}
//preparetionTimeInMinutes()

function totalTimeMinutes(cantidadCapas,tiempoHorno){
    cantidadCapas=parseInt
    (prompt("¿Cuantas capas tiene la lasagna?"))
    tiempoHorno=parseInt(prompt("¿Cuantos minutos lleva en el horno?"))
    let tiempoTotal=(cantidadCapas*2)+tiempoHorno
    alert("El tiempo total de trabajo es: "+tiempoTotal+" minutos")
}
totalTimeMinutes()