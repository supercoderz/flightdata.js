var assert = require('assert')
var flightdata = require('../lib/flightdata.js')

describe('FlightData - basic tests', function() {
  describe('#get_airlines()', function() {
    it('should return a list of airlines in the world', function() {
    	flightdata.get_airlines().length>0;
    })
  })
  describe('#get_airports()', function() {
    it('should return a list of airports in the world', function() {
    	flightdata.get_airports().length>0;
    })
  })
  describe('#get_countries()', function() {
    it('should return a list of countries in the world', function() {
    	flightdata.get_countries().length>0;
    })
  })
  describe('#get_history_by_tail_number()', function() {
    it('should return the flight history of the aircraft',function(){
      flightdata.get_history_by_tail_number('9V-SMA').length>0;
    })
  })
  describe('#get_history_by_flight_number()', function() {
    it('should return the flight history of that flight number',function(){
      flightdata.get_history_by_tail_number('AI-101').length>0;
    })
  })
  describe('#get_info_by_tail_number()', function() {
    it('should return the flight info of that tail number',function(){
      flightdata.get_info_by_tail_number('AI-101').length>0;
    })
  })
  describe('#get_flights()', function() {
    it('should return the flights for that airline', function() {
      flightdata.get_flights('air india').length>0;
    })
  })
  describe('#get_fleet()', function() {
    it('should return the fleet details for that airline', function() {
      flightdata.get_fleet('air india').length>0;
    })
  })
})