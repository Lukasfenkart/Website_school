
let urlauto = "https://api.api-ninjas.com/v1/cars?make=toyota";

//auto yaris
fetch(urlauto,{
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
        html += "<li> " + element.model + "</li>";
    });
    document.getElementById("autos").innerHTML = html;
})