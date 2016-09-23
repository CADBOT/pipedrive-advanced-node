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
//console.log(buff)
//console.log(buff.toString())

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

buff = new Buffer([65, 65, 60])
//console.log(buff.toString())

// we can use bracket notation to read individual bytes
/*
console.log(buff[0])
console.log(buff[1])
console.log(buff[2])
*/

buff[1] = 66
//console.log(buff.toString())

// What if we don't write to every byte?
buff = new Buffer(10)
buff.write('hello!')
//console.log(buff.toString())

buff = Buffer.alloc(10)
buff.write('hello!')
//console.log(buff)
//console.log(buff.toString())

// compare the two
//console.log(new Buffer(10))
//console.log(Buffer.alloc(10))

// technically speaking "new Buffer()" is deprecated

// how do we write a string like before?
buff = Buffer.from('write this string')
//console.log(buff.toString())

// how do we write an array like before?
buff = Buffer.from([65, 65, 50])
//console.log(buff.toString())

// 2nd parameter specifies the encoding. Defaults to UTF-8 (fun side note JavaScript strings are UTF-2)
buff = new Buffer('dXNlcm5hbwU6cGFzc3dvcmQ=', 'base64')
//console.log(buff.toString())

buff = Buffer.from('dXNlcm5hbwU6cGFzc3dvcmQ=', 'base64')
//console.log(buff.toString())

/*
 * We can write things other than 8 bit ints
 *
 * For example we can write 16bit ints
 * if I wanted to write hi in one go
 * h => 48(hex) => 01001000
 * i => 49(hex) => 01001001
 *
 * if we concat the bits together
 * 01001000 01001000 => 18505
 */

buff = Buffer.alloc(2)
buff.writeUInt16BE(18505) // Big Endian (we'll discuss that shortly)
//console.log(buff)
//console.log(buff.toString())
// same thing as if we did
buff.writeUInt8(72) // 01001000 => 72(decimal)
buff.writeUInt8(73, 1)
//console.log(buff)
//console.log(buff.toString())

/*
 *
 * 5 Minutes
 *
 * Take whatever you wrote in the prior lab. And this time write it using
 * Unsigned 16 big Big Endian integers (if possible)
 */

// Big Endian vs Little Endian
//
// the order in which we store the bytes
//
// Big Endian the Most sig byte comes first(human intuitive)
//
// 48, 49, 50
// 1st byte  2nd byte  3rd byte
// 01001000  01001001  01001010
//
// In little endian
// 01001010  01001001  01001000  
//
// Observe that within each byte. The order
// is perserved
//

buff = Buffer.alloc(2)
buff.writeUInt16LE(18505)
//console.log(buff)
//console.log(buff.toString())

/*
 * I like to stick to Big Endian unless I'm doing low level programming
 * related to Little Endian
 */

// we can slice up buffers. Does NOT do a copy or clone. It's another ref
// to the same bytes

buff = Buffer.from('Hello world!')
var view = buff.slice(6, 11) // inclusive start index. Exclusive end index
//console.log(view.toString())

view.write('bye')
console.log(view.toString())
// our original buffer is modified as well
//console.log(buff.toString())
view.write('byeeeeeeeeee')

// We can read by various set amounts
buff = Buffer.from('Hello world!')
console.log(buff.readUInt8(0))
console.log(buff.readUInt8(1))
// isn't very useful, as [] notation is kinda sorta syntatic sugar for readUInt8 and writeUInt8
console.log(buff[0])
console.log(buff[1])

// these get useful when we want to bring in more than a byte, but less than the entire file
var c = buff.readUInt16BE()
console.log(c)




