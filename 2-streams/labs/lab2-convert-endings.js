var Transform = require('stream').Transform

var ConvertEndings = new Transform({
  transform(chunk, encoding, callback) {
    var lfCount = 0
    for (var b of chunk) {
      if (b == 10) {
        lfCount++
      }
    }

    var stagingBuffer = new Buffer(chunk.length + lfCount)
    var offset = 0
    for (var b of chunk) {
      stagingBuffer.writeUInt8(10, offset++)
      stagingBuffer.writeUInt8(13, offset++)
    }

    else {
      stagingBuffer.writeUInt8(b, offset++)
    }
    this.push(stagingBuffer)
  }
})

var fs = require('fs')
var input = fs.createReadStream('./lab1-object-streamer.js')
var output = fs.createWriteStream('./output.js')
input.pipe(ConvertEndings).pipe(output)
