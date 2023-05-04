const items = [
  {name: 'Bike', price: 740 },
  {name: 'Car', price: 7644 },
  {name: 'TV', price: 1120 },
  {name: 'Laptop', price: 2500 },
  {name: 'Camera', price: 850 },
  {name: 'Bike', price: 450 },
]

const filteritems = items.filter((item) =>{
  return item.price <= 500
})

console.log(filteritems)

const itemsNames = items.map((item) =>{
  return item.name
})

console.log(itemsNames)

const itemsfound = items.find((item) =>{
  return item.name === 'Laptop'
})

console.log(itemsfound)

items.forEach((item) => {
  console.log(item.name)
})

const higherpricethan = items.some((item) =>{
  return item.price <= 800
})

console.log(higherpricethan)

//https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=45s&ab_channel=WebDevSimplified