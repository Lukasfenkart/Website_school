localStorage.setItem('name','Bob')
console.log(localStorage.getItem('name'))

localStorage.removeItem('name')
console.log(localStorage.getItem('name')) //like a JSON object Key Value

sessionStorage.setItem('name', 'John')
console.log(sessionStorage.getItem('name'))

sessionStorage.setItem('name', 'Bob') 
sessionStorage.setItem('name', 'John') //John ueberschreibt Bob

document.cookie = 'name=kyle; expires=' + new Date(2023, 5, 4).toUTCString()

document.cookie = 'name=Bob; expires=' + new Date(2023, 5, 4).toUTCString()
//ueberschreibt den Name nicht wie bei session oder local Storage