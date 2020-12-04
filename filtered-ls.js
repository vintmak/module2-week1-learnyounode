var fs = require('fs')

fs.readdir(process.argv[2],(err,list)=>{
	var extension = "."+process.argv[3]

	for (var i = 0; i < list.length ; i++){
		if (list[i].endsWith(extension)){
			console.log(list[i])
		}
	}
})
