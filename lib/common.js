var rp = require('request-promise')

var Common = {}


Common.get_page_or_none = function(url,f,e){
	rp.get(url).then(function(res){
		f(res)
	}).catch(function(err){
		e(err)
	})
}

module.exports = Common