var fs = require('fs')

function convert(inputFile, outputFile) {
  fs.readFile(inputFile, function(err, buffer) {
    var lfCount = 0
    for (var b of buffer) {
      if (b == 10) { // 10 is a LF
        lfCount++
      }
    }

    var outputBuffer = Buffer.alloc(buffer.length + lfCount)
    var offset = 0
    for (var b of buffer) {
      if (b == 10) {
       outputBuffer.writeUInt8(10, offset++) // write /LF
       outputBuffer.writeUInt8(13, offset++) // write /CR
      }
      else {
       outputBuffer.writeUInt8(b, offset++)
      }
    }
    fs.writeFile(outputFile, outputBuffer)
  })
}

convert('./input.txt', './output.txt')
