var rp = require('request-promise')

var Common = {}


Common.get_page_or_none = function(url){
	rp(url)
		.then(function (string){
			console.log(string)
			return string
		})
		.catch(function (error){
			return null
		})
}

module.exports = Common