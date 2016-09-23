var Readable = require('stream').Readable
var Writable = require('stream').Writable

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

class ArrayStreamWriter extends Writable {
  constructor(options) {
    super(options)
    this.sink = [] // low level resource
  }

  _write(chunk, encoding, callback) {
    this.sink.push(chunk) // no real relation to the this.push from a Read stream
    console.log(this.sink)
    callback()
  }
}

var arrayWriter = new ArrayStreamWriter()
arrayStream.pipe(arrayWriter)

/*
 * flatten the _write method above so we have an array of Numbers, instead of 
 * an Array containing a Buffer containing numbers...
 *
 * ObjectStreamWriter
 *
 */








