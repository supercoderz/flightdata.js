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

FlightData.get_history_by_flight_number = function(flight){
	return [[]];
}

module.exports = FlightData
