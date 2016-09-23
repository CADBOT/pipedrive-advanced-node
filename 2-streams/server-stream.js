var http = require('http')
var fs = require('fs')

/*
 * This implementation must buffer the entire file (CAN BE BAD)
                                        // req and res are streams
var server = http.createServer(function(req, res) {
  fs.readFile('./index.html', function(err, data) {
    res.end(data)
  })
}

server.listen(3000)
*/

var server = http.createServer(function (req, res) {
  var fileStream = fs.createReadStream('./index.html')
  /*
  fileStream.on('data', function(chunk) {
    res.write(chunk) 
  }

  fileStream.on('end', function() {
    res.end()
  }
  */
  // pipes are more elegent
  fileStream.pipe(res)
}).listen(3000)

// btw process.stdout is also a stream you can write to
// Create a readable stream of a file, and pipe it to stdout
//
// and also try piping another file to an output file
var readStream = fs.createReadStream('./server-stream.js')
readStream.pipe(process.stdout)

var writeStream = fs.createWriteStream('./other.js')
readStream.pipe(writeStream)
