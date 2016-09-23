//Unix: New lines are represented with a line feed
//Windows: New lines represented with a line feed and a carrige return
//

/*
 * @inputFile location of a text file with Unix style line endings
 * @outputFile where to write our new file with Windows style line endings
 *
 */

// Hints
// Make use of fs
// Take note of the fact that the outputFile is bigger than the input file
// do this using buffer
function convert(inputFile, outputFile) {

}

convert('./input.txt', './input-windows.txt')


var buff = Buffer.from('hello')
// hint2: the ES6 for of loop will help
for (var b of buff) {
  console.log(b)
}
