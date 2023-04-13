
let urlauto1 = "https://api.api-ninjas.com/v1/cars?limit=1&make=porsche";
let urlauto2 = "https://api.api-ninjas.com/v1/cars?limit=1&make=lamborghini";
let urlauto3 = "https://api.api-ninjas.com/v1/cars?limit=1&make=acura";
let urlauto4 = "https://api.api-ninjas.com/v1/cars?limit=1&model=e63";

fetch(urlauto1,{
    method:"GET",    
    headers: {
        "X-Api-Key": "MIxpBThmrzhgTwo0r9XWQw==unSaztTA6EPsUPxH"
    }
})
.then(response => response.json())
.then(function (data){
    console.log(data);
    let html = "";
    data.forEach(element => {
        html += "<div> Marke: " + element.make + "</div>";
        html += "<div> Modell:" + element.model + "</div><hr>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
        html += "<div> Zylinder: " + element.cylinders + "</div>";
        html += "<div> Hubraum: " + element.displacement + "L</div>";
    });
    document.getElementById("autos1").innerHTML = html;
})


fetch(urlauto2,{
    method:"GET",    
    headers: {
        "X-Api-Key": "MIxpBThmrzhgTwo0r9XWQw==unSaztTA6EPsUPxH"
    }
})
.then(response => response.json())
.then(function (data){
    console.log(data);
    let html = "";
    data.forEach(element => {
        html += "<div> Marke: " + element.make + "</div>";
        html += "<div> Modell:" + element.model + "</div><hr>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>"; 
        html += "<div> Zylinder: " + element.cylinders + "</div>";
        html += "<div> Hubraum: " + element.displacement + "L</div>";
    });
    document.getElementById("autos2").innerHTML = html;
})


fetch(urlauto3,{
    method:"GET",    
    headers: {
        "X-Api-Key": "MIxpBThmrzhgTwo0r9XWQw==unSaztTA6EPsUPxH"
    }
})
.then(response => response.json())
.then(function (data){
    console.log(data);
    let html = "";
    data.forEach(element => {
        html += "<div> Marke: " + element.make + "</div>";
        html += "<div> Modell:" + element.model + "</div><hr>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
        html += "<div> Zylinder: " + element.cylinders + "</div>";
        html += "<div> Hubraum: " + element.displacement + "L</div>";
    });
    document.getElementById("autos3").innerHTML = html;
})

fetch(urlauto4,{
    method:"GET",    
    headers: {
        "X-Api-Key": "MIxpBThmrzhgTwo0r9XWQw==unSaztTA6EPsUPxH"
    }
})
.then(response => response.json())
.then(function (data){
    console.log(data);
    let html = "";
    data.forEach(element => {
        html += "<div> Marke: " + element.make + "</div>";
        html += "<div> Modell:" + element.model + "</div><hr>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
        html += "<div> Zylinder: " + element.cylinders + "</div>";
        html += "<div> Hubraum: " + element.displacement + "L</div>";
    });
    document.getElementById("autos4").innerHTML = html;
})

