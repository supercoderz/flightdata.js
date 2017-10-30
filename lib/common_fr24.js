var common = require('./common.js')
var FR24 = {}

FR24.LOGIN_URL='https://www.flightradar24.com/user/login'
FR24.ROOT = 'http://www.flightradar24.com'
FR24.REG_BASE = function(reg,page=1,limit=100,token=''){
    return 'https://api.flightradar24.com/common/v1/flight/list.json?query='+reg+'&fetchBy=reg&page='+page+'&limit='+limit+'&token='+token
}
FR24.FLT_BASE = function(flt,page=1,limit=100,token=''){
    return 'https://api.flightradar24.com/common/v1/flight/list.json?query='+flt+'&fetchBy=flight&page='+page+'&limit='+limit+'&token='+token
}
FR24.AIRPORT_BASE = 'http://www.flightradar24.com/data/airports/{0}'
FR24.AIRLINE_BASE = 'https://www.flightradar24.com/data/aircraft/{0}'
FR24.AIRLINE_FLT_BASE = 'https://www.flightradar24.com/data/flights/{0}'
FR24.IMAGE_BASE = 'https://www.flightradar24.com/aircrafts/images/?aircraft={0}'

FR24.login = function(email,password,f,e){
	var data = {
		email: email,
		password: password,
    }
    var options = {
        json: true
    }
	return common.post(this.LOGIN_URL,data,f,e,options)
}

FR24.get_data = function(url,f,e){
    return common.get_raw_data_json(url,f,e)
}

module.exports = FR24