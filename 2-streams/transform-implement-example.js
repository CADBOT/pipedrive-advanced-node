var Transform = require('stream').Transform

class UpperTransform extends Transform {
  constructor(options) {
    super(options)
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
}

var fs = require('fs')

var input = fs.createReadStream('./input.txt')
var output = fs.createWriteStream('./caps.txt')

input.pipe(new UpperTransform).pipe(output)

/*
 * Write a transform that removes all ! marks, then writes to an output
 * file
 *
 */

/*
 *
 * Create a Transform that converts Unix style line endings to Windows style
 *
 * 15 minutes
 *
 */
