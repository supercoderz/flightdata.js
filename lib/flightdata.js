fr24 = require('./common_fr24.js')

var FlightData = {}

FlightData.get_airlines = function(){
	return ['air india'];
}

FlightData.get_airports = function(){
	return ['changi airport'];
}

FlightData.get_countries = function(){
	return ['singapore'];
}

FlightData.get_flights = function(airline){
	return ['ai101'];
}

FlightData.get_fleet = function(airline){
	return [[]];
}

FlightData.get_history_by_tail_number = function(tail){
	return [[]];
}

FlightData.get_info_by_tail_number = function(tail){
	return [[]];
}

FlightData.get_history_by_flight_number = function(flight,f,e,page=1,limit=100){
	return fr24.get_data(fr24.FLT_BASE(flight,page,limit),f,e)
}

module.exports = FlightData
