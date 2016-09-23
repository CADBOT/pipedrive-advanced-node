var Readable = require('stream').Readable

class ObjectKeyStream extends Readable {
  constructor(object, options) {
    super(options)
    this.source = Object.keys(object)
    this.index = 0
  }

  // a "private" method. You will never call it, but the Readble base class will in an async matter
  _read(size) { // how much to read (not used often)
    if (this.index == this.source.length) return this.push(null)

    this.push((this.source[this.index++]).toString() + '\n') // we can only push strings and buffers (not numbers)
  }
}

var keyStream = new ObjectKeyStream({name: 'john', age: 50})
keyStream.pipe(process.stdout)


class ObjectValueStream extends Readable {
  constructor(object, options) {
    super(options)
    this.keys = Object.keys(object)
    this.source = object
    this.index = 0
  }

  // a "private" method. You will never call it, but the Readble base class will in an async matter
  _read(size) { // how much to read (not used often)
    if (this.index == this.keys.length) return this.push(null)

    this.push((this.source[this.keys[this.index++]]).toString() + '\n') // we can only push strings and buffers (not numbers)
  }
}



var s = new ObjectValueStream({name: 'john', age: 50})
s.pipe(process.stdout)
