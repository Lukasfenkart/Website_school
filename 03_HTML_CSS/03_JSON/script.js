let data = ["hans", "paul"]; //Array

let person = { firstName: "Lukas", lastName: "Fenkart", alter: 18 }; //JSON
console.log(person.firstName);
console.log(person.alter);

let data1 = [
  { firstName: "Lukas", lastName: "Fenkart", alter: 18 }, //array mit JSON
  { firstName: "Paul", lastName: "Sammer", alter: 17 },
  { firstName: "Hanna", lastName: "Frei", alter: 18 },
];
for(let index = 0; index < data1.length; index++){
    const element = data1[index]
    console.log(element.firstName)
}
data1.forEach(element => {
    console.log(element.lastName)
});

function laodPeople() {
    let html = "";
    data1.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    })

    console.log(html);

    document.getElementById("content").innerHTML = html;
}

laodPeople();
