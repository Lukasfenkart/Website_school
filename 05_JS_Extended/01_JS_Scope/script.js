//drei Variablentypen

let let1 = 1;
var var1 = 1;
const const1 = 1;

if(true){
    let let2 = "let is true"; //let kann nur in einem Block genutzt werden Vorteil: kann nicht überschrieben werden
}
console.log(let2);

if(true){
    var var2 = "var is true"; //var bezieht sich auf die ganze Seite. Nachteil: kann überschrieben werden
}
console.log(var2)

if(true){
    const const2 = "const is true"; //const kann nur in einem Block genutzt werden
}
console.log(const2)