
let urlHL1 = "https://api.api-ninjas.com/v1/helicopter?manufacturer=Bell";
let urlHL2 = "https://api.api-ninjas.com/v1/helicopter?manufacturer=Enstrom";
let urlHL3 = "https://api.api-ninjas.com/v1/helicopter?manufacturer=Agusta";

//Heli Bell
fetch(urlHL1,{
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
        html += "<div> Modell: " + element.model + "</div><hr>";
        html += "<div> Geschwindigkeit: " + element.max_speed_sl_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Anzahl Rotoren: " + element.num_blades + "</div>";
        html += "<div> Rotor Durchmesser: " + element.main_rotor_diameter_ft + "ft</div>";
    });
    document.getElementById("HL1").innerHTML = html;
})
fetch(urlHL2,{
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
        html += "<div> Modell: " + element.model + "</div><hr>";
        html += "<div> Geschwindigkeit: " + element.max_speed_sl_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Anzahl Rotoren: " + element.num_blades + "</div>";
        html += "<div> Rotor Durchmesser: " + element.main_rotor_diameter_ft + "ft</div>";
    });
    document.getElementById("HL2").innerHTML = html;
})
fetch(urlHL3,{
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
        html += "<div> Modell: " + element.model + "</div><hr>";
        html += "<div> Geschwindigkeit: " + element.max_speed_sl_knots + " Knoten </div>";
        html += "<div> Länge: " + element.length_ft + "ft</div>";
        html += "<div> Anzahl Rotoren: " + element.num_blades + "</div>";
        html += "<div> Rotor Durchmesser: " + element.main_rotor_diameter_ft + "ft</div>";
    });
    document.getElementById("HL3").innerHTML = html;
})