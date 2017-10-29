var common = require('./common.js')
var FR24 = {}

FR24.LOGIN_URL='https://www.flightradar24.com/user/login'

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

module.exports = FR24