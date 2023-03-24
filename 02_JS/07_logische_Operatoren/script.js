let random1 = Math.random()*100;
let random2 = Math.random()*100;

if(random1 < random2 && random2 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Zahl 2 ist mini")
}

if(random1 < 30 || random2 < 30){
    console.log("Eine der beiden Zahlen ist kleiner als 30")
}

if(random1 < 50 && random2 != 50){
    console.log("Erste Zahl klein und zweite Zahl kein 50iger")
}