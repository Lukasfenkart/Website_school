
let urlauto1 = "https://api.api-ninjas.com/v1/cars?limit=1&make=toyota";
let urlauto2 = "https://api.api-ninjas.com/v1/cars?limit=1&make=ford";
let urlauto3 = "https://api.api-ninjas.com/v1/cars?limit=1&make=volkswagen";

//auto toyta
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
        html += "<div> Modell:" + element.model + "</div>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
    });
    document.getElementById("autos1").innerHTML = html;
})

//auto focus
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
        html += "<div> Modell:" + element.model + "</div>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
    });
    document.getElementById("autos2").innerHTML = html;
})

//auto golf
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
        html += "<div> Modell:" + element.model + "</div>";
        html += "<div> Baujahr: " + element.year + "</div>";
        html += "<div> Verbrauch: " + element.city_mpg + " MPG</div>";
        html += "<div> Antriebsart: " + element.drive + "</div>";
    });
    document.getElementById("autos3").innerHTML = html;
})

