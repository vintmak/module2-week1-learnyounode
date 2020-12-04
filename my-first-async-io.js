var fs = require('fs');

fs.readFile(process.argv[2],(err,data)=>{
	var words = data.toString().split("\n")
	console.log(words.length-1)
})
