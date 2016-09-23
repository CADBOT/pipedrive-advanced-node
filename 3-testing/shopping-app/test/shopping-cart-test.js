var expect = require('chai').expect
var sinon = require('sinon')
var ShoppingCart = require('../shoppingCart.js')

describe('ShoppingCart', function() {
  it('can add a new item', function() {
    var cart = new ShoppingCart()
    cart.add({item: 'book', cost: 10})
    expect(cart.items).to.eql(
      [{item: 'book', cost: 10}]
    )
  })

  it('can compute the subtotal', function() {
    var cart = new ShoppingCart()
    cart.add({item: 'book', cost: 10})
    cart.add({item: 'book', cost: 15})
    expect(cart.subtotal()).to.eql(25)
  })

  it('can compute the subtotal with 3 items', function() {
    var cart = new ShoppingCart()
    cart.add({item: 'book', cost: 10})
    cart.add({item: 'book', cost: 15})
    cart.add({item: 'book', cost: 10})
    expect(cart.subtotal()).to.eql(35)
  })
})

describe('shoppingCart total', function() {
  var cart
  beforeEach(function() {
    cart = new ShoppingCart()
    cart.add({item: 'tv', cost: 50})
    cart.add({item: 'book', cost: 50})
  })

  it('can compute the sales tax for Denmark', function() {
    sinon.stub(cart, 'subtotal', function() {
      return 100
    })
    expect(cart.computeTax('denmark')).to.equal(10)
    expect(cart.subtotal.called).to.eql(true)
    cart.subtotal.restore()
  })

  it('can compute the sales tax for norway', function() {
    expect(cart.computeTax('norway')).to.equal(20)
  })

  it('can compute the total for denmark', function() {
    sinon.stub(cart, 'subtotal', function() {
      return 100
    })
    sinon.stub(cart, 'computeTax', function() {
      return 10
    })
    
    expect(cart.total('denmark')).to.eql(110)
    expect(cart.subtotal.called).to.eql(true)
    expect(cart.computeTax.called).to.eql(true)
    expect(cart.computeTax.calledWith('denmark')).to.eql(true)
    cart.computeTax.restore()
    cart.subtotal.restore()
  })
})

describe('end to end tests', function() {
  var cart
  beforeEach(function() {
    cart = new ShoppingCart()
    cart.add({item: 'tv', cost: 50})
    cart.add({item: 'book', cost: 50})
  })
  it('can serialize the Shopping Cart', function(done) {
    cart.serialize('/tmp/products.txt', function(err) {
      expect(err).to.eql(null)
      done()
    })
  })
})


