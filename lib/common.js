var rp = require('request-promise')

var Common = {}


Common.get_page_or_none = function(url,f,e,extra_opts={}){
	var base = {
		uri: url
	}
	var options=Object.assign({},base,extra_opts)
	rp.get(options).then(function(res){
		f(res)
	}).catch(function(err){
		e(err)
	})
}

Common.get_raw_data_json = function(url,f,e,extra_opts={}){
	var base = {
		json: true
	}
	var options = Object.assign({},base,extra_opts)
	this.get_page_or_none(url,f,e,options)
}

Common.post = function(url,data,f,e,extra_opts={}){
	var base = {
		uri: url,
		formData: data
	}
	var options=Object.assign({},base,extra_opts)
	rp.post(options).then(function(res){
		f(res)
	}).catch(function(err){
		e(err)
	})
}

module.exports = Common