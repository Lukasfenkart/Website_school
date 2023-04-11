

let urlteams = "http://api.football-data.org/v4/competitions/WC/teams";
let urlbilder = "http://api.football-data.org/v4/teams/2061/crest"


//teams
fetch(urlteams,{
    method:"GET",    
    headers: {
        "x-auth-token": "ff7827f5d19145c2961ff978a4f1f2fd"
    }
})
.then(response => response.json())
.then(function (data){
    let html = "";
    data.teams.forEach(element => {
        html += "<li>" +element.name + "</li>";
    });
    document.getElementById("teams").innerHTML = html;
})

//bilder
fetch(urlbilder,{
    method:"GET",    
    headers: {
        "x-auth-token": "ff7827f5d19145c2961ff978a4f1f2fd"
    }
})
.then(response => response.json())
.then(function (data){
    let html = "";
    data.teams.forEach(element => {
        html += "<li> " +element.name + "</li>";
    });
    document.getElementById("pictures").innerHTML = html;
})