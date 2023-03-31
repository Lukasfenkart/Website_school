function registerevents(){
    document.getElementById("loadtodos").addEventListener("click",function(){
        loadtodos();
    })
    document.getElementById("loadusers").addEventListener("click",function(){
        loadusers();
    })
}
function loadtodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html = "";
        data.forEach(todo => {
            html += "<li>" +todo.title +"</li>";
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(function(err){
        console.log(err);
    })
}
function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let html = "";
        data.forEach(user => {
            html += "<li>" +user.name +"</li>";
        });
        document.getElementById("list").innerHTML = html;
    })
    .catch(function(err){
        console.log(err);
    })
}
registerevents();