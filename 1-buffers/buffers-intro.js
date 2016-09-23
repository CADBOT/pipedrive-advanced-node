/*
 * How do we create a buffer?
 *
 */

// kind of like C's malloc. 
var buff = new Buffer(5) // how many bytes (octes) will be inside this buffer?
// buffers cannot be resized! Unlike C there is no realloc

buff.write('hello') // will convert this string into a byte representation
console.log(buff)
console.log(buff.toString())
console.log(buff.length === buff.toString()) // the number of bytes inside the buff

// What happens if we put something too large in?
buff = new Buffer(5) // how many bytes (octes) will be inside this buffer?
buff.write('hello world!')
console.log(buff.toString())
buff.write('bye')
console.log(buff.toString())
