var assert = require('assert');
var flightdata = require('../lib/flightdata.js');

describe('FlightData', function() {
  describe('#get_airlines()', function() {
    it('should return a list of airlines in the world', function() {
    	flightdata.get_airlines().length>0;
    });
  });
  describe('#get_airports()', function() {
    it('should return a list of airports in the world', function() {
    	flightdata.get_airports().length>0;
    });
  });
  describe('#get_countries()', function() {
    xit('should return a list of countries in the world', function() {
    	throw new Error("not implemented");
    });
  });
  describe('#get_history_by_tail_number()', function() {
    xit('should return the flight history of the aircraft', function() {
    	throw new Error("not implemented");
    });
  });
  describe('#get_history_by_flight_number()', function() {
    xit('should return the flight history of that flight number', function() {
    	throw new Error("not implemented");
    });
  });
  describe('#get_info_by_tail_number()', function() {
    xit('should return the flight info of that tail number', function() {
      throw new Error("not implemented");
    });
  });
  describe('#get_flights()', function() {
    xit('should return the flights for that airline', function() {
      throw new Error("not implemented");
    });
  });
  describe('#get_fleet()', function() {
    xit('should return the fleet details for that airline', function() {
      throw new Error("not implemented");
    });
  });
});