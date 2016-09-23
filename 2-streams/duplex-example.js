var zlib = require('zlib')
var fs = require('fs')
gzip = zlib.createGzip()

var inputStream = fs.createReadStream('./array.txt')
var outputStream = fs.createWriteStream('./array.txt.gz')

inputStream.pipe(gzip).pipe(outputStream)
