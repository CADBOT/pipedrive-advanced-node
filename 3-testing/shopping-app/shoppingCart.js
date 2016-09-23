var fs = require('fs')

var taxes = {
  denmark: 0.10,
  norway: 0.20
}

function ShoppingCart() {
  this.items = []
}

ShoppingCart.prototype = {
  add(item) {
    this.items.push(item)
  },

  subtotal() {
    return this.items.reduce(function(total, item) {
      return total + item.cost
    }, 0)
  },

  computeTax(country) {
    return (this.subtotal() * taxes[country])
  },

  total(country) {
    return this.subtotal() + this.computeTax(country)
  },

  serialize(path, cb) {
    fs.writeFile(path, this.items.toString(), function(err) {
      cb(err)
    })
  }
}

module.exports = ShoppingCart
