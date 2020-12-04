var fs = require('fs')

var data = fs.readFileSync(process.argv[2]);
var words = data.toString().split("\n")

console.log(words.length - 1)
