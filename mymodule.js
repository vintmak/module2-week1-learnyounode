const fs = require('fs')
module.exports = function(name, extension, callback){
	fs.readdir(name,(err,list)=>{
		if (err) {
			return callback(err)
			}

			var answers = list.filter(val=>{
				return val.endsWith("."+extension)
			})
			return callback(null,answers)

	})
}
