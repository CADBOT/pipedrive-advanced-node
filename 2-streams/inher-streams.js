var Readable = require('stream').Readable

// es6 syntax
class ArrayStreamer extends Readable {
  constructor(array, options) {
    super(options)
    this.source = array // or some other low level resource
    this.index = 0
  }

  // a "private" method. You will never call it, but the Readble base class will in an async matter
  _read(size) { // how much to read (not used often)
    if (this.index == this.source.length) return this.push(null)

    this.push((this.source[this.index++]).toString() + '\n') // we can only push strings and buffers (not numbers)
  }
}

var arrayStream = new ArrayStreamer([2, 5, 10, 12])
//arrayStream.pipe(process.stdout)

var fs = require('fs')
var arrayFile = fs.createWriteStream('./array.txt')
arrayStream.pipe(arrayFile)

/*
 * Create an ObjectKeyStreamer and an ObjectValueStreamer (both Readable)
 *
 * try piping to at least 2 different writtable streams
 *
 *
 * 10 minutes
 *
 */
