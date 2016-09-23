var expect = require('chai').expect
var ShoppingCart = require('../shoppingCart.js')

describe('ShoppingCart', function() {
  it('can add a new item', function() {
    var cart = new ShoppingCart()
    cart.add({item: 'book', cost: 10})
    expect(cart.items).to.eql(
      [{item: 'book', cost: 10}]
    )
  })
})
