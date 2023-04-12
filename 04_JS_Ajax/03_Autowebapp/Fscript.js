
let urlFL1 = "https://api.api-ninjas.com/v1/aircraft?manufacturer=Gulfstream";
let urlFL2 = "https://api.api-ninjas.com/v1/aircraft?manufacturer=boeing";
let urlFL3 = "https://api.api-ninjas.com/v1/aircraft?manufacturer=airbus";

//Flugzeug Gulfstream
fetch(urlFL1,{
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
        html += "<div> Hersteller: " + element.manufacturer + "</div>";
        html += "<div> Modell: " + element.model + "</div>";
        html += "<div> Geschwindigkeit: " + element.max_speed_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Spannweite: " + element.wing_span_ft + "ft</div>";
        html += "<div> Reichweite: " + element.range_nautical_miles + " N-Meilen</div>";
    });
    document.getElementById("FL1").innerHTML = html;
})
fetch(urlFL2,{
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
        html += "<div> Hersteller: " + element.manufacturer + "</div>";
        html += "<div> Modell: " + element.model + "</div>";
        html += "<div> Geschwindigkeit: " + element.max_speed_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Spannweite: " + element.wing_span_ft + "ft</div>";
        html += "<div> Reichweite: " + element.range_nautical_miles + " N-Meilen</div>";
    });
    document.getElementById("FL2").innerHTML = html;
})
fetch(urlFL3,{
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
        html += "<div> Hersteller: " + element.manufacturer + "</div>";
        html += "<div> Modell: " + element.model + "</div>";
        html += "<div> Geschwindigkeit: " + element.max_speed_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Spannweite: " + element.wing_span_ft + "ft</div>";
        html += "<div> Reichweite: " + element.range_nautical_miles + " N-Meilen</div>";
    });
    document.getElementById("FL3").innerHTML = html;
})