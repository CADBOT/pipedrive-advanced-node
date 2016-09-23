/*
 * How do we create a buffer?
 *
 */

// kind of like C's malloc. 
var buff = new Buffer(5) // how many bytes (octes) will be inside this buffer?
// buffers cannot be resized! Unlike C there is no realloc

buff.write('hello') // will convert this string into a byte representation
//console.log(buff)
//console.log(buff.toString())
//console.log(buff.length === buff.toString()) // the number of bytes inside the buff

// What happens if we put something too large in?
buff = new Buffer(5) // how many bytes (octes) will be inside this buffer?
buff.write('hello world!')
//console.log(buff.toString())
buff.write('bye')
//console.log(buff.toString())


// You can think of buffers as true arrays of unsigned 8 bit integers

buff = new Buffer(2)
buff.writeUInt8(72)
buff.writeUInt8(73) // just like a normal write, this will write from the beginning
//console.log(buff)
//console.log(buff.toString())

// also memory is not zeroed out
// Do not create a buffer this way, if there is potentially sensitive information in RAM
buff = new Buffer(10)
//console.log(buff)
//console.log(buff.toString())

buff = new Buffer(2)
buff.writeUInt8(72) // write to the 0th byte
buff.writeUInt8(73, 1) // write to the 1st byte
console.log(buff)
console.log(buff.toString())

/*
 * 7 Minutes
 *
 * all at once
 * 1st: Write your name to a buffer using write.
 *
 * byte by byte
 * 2nd: Write your name to a buffer using writeUInt8
 * (if you have no ascii chars in your name, write something else
 * instead
 */
