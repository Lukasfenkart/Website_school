let random1 = Math.random();
console.log(random1)

let random = Math.random() * 1000;
console.log(random)

let randomAsInteger = Math.round(random);
console.log(randomAsInteger)

let random2 = Math.random() * 1000;

if(random2 > 800){
    console.log("Zahl größer 800")
}
else if(random2 < 800 && random2 > 500){
    console.log("Zahl zwischen 500 und 800")
}
else if(random2 < 500 && random2 > 200){
    console.log("Zahl zwischen 500 und 200")
}
else if(random2 < 200){
    console.log("Zahl kleiner 200")
}