function ShoppingCart() {
  this.items = []
}

ShoppingCart.prototype = {
  add(item) {
    this.items.push(item)
  }
}

module.exports = ShoppingCart
