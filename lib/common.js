var r = require('request')

var Common = {}


Common.get_page_or_none = function(url){
	x=r.get(url)
	console.log(x)
	return x.body
}

module.exports = Common