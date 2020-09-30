import data from './data.js'
const itemsContainer = document.getElementById('items')

for (let i=0; i<data.length; ++i) {
  
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

 
    let img = document.createElement('img');
    
    img.src = data[i].image
    img.width = 300
    img.height = 300

   
    newDiv.appendChild(img)

    itemsContainer.appendChild(newDiv)

    let desc = document.createElement('P')

    newDiv.appendChild(desc)

    desc.innerText =data[i].desc    

    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')

    button.id = data[i].name

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)

}

const cart [ ]

function addItem (name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }
    const item = { name, price, qty: 1 }
    cart.push(item)


}
// Show Items
function showItems () {
    const qty = getQty()
    console.log(`You have ${qty} items in your cart`)
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`-${ cart[i].name} $${cart[i].price} x ${cart[i].qty} `)
    }
    const total = getTotal()
    console.log(`Your total is: $${total.toFixed(2)}`)
}

// Get Quantity
function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

// Get the Total
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total = total + `${cart[i].price} * ${cart[i].qty}`
    }

}


addItem(happy, 14.99)
addItem(sad, 13.99)

showItems()









