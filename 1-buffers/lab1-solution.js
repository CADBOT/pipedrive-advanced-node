/*
 * @day is a string that represents a day of the week ('Mon' 'Tue'
 * @record is a buffer of size 1 (just 1 byte). That represents that employees
 * attendece
 */

var days = {
  mon: 1,
  tue: 2,
  wed: 4,
  thur: 8,
  fri: 16
}


function attendance(day, record) {
  var recordNumber = record[0]
  var dayInt = days[day] 
  var newRecord = recordNumber | dayInt // | is the bitwise OR operator
  record[0] = newRecord
}

var monTues = new Buffer(1) // gives us 1 byte to work with. 
monTues[0] = 3 // 0000 0011
attendance('thur', monTues)
//console.log(monTues) 0000 1011(binary) => 11(decimal)

/*
* @record is a buffer of size 1 (just 1 byte). That represents that employees
* i.e. if record was equal 3  0000 0011
* Days attended: Monday, Tuesday
*/
function printDaysAttended(record) {
  var recNumber = record[0]
  Object.keys(days).forEach(function(day) {
    if (days[day] & recNumber) { // & is bitwise and
      console.log('attended ' + day)
    }
  })
}

printDaysAttended(monTues)
