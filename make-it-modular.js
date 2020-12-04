const mymodule = require('./mymodule.js');

var ext = process.argv[3]
mymodule(process.argv[2], ext,function(err,data){
	if (err){
		console.log(err)
	}
	else {
		for (var i = 0 ; i < data.length; i++){
			console.log(data[i])
		}
	}
})
