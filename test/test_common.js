var assert = require('chai').assert
var should = require('chai').should()
var common = require('../lib/common.js')


describe('Common tests', function(){
	describe('#get_page_or_none()',function(){
		it('should return none for invalid page',function(){
			common.get_page_or_none('http://invalid',function(res){
			},function(err){
				assert.equal(1,1)
			})
		})
		it('should retrun the page content for a valid page address',function(){
			common.get_page_or_none('http://google.com',function(res){
				should.exist(res)
			},function(err){

			})
		})
	})
	describe('#get_raw_data_json()',function(){
		xit('should return non if the data from url is not json',function(){

		})
		xit('should return json data for a valid url', function () {
			
		})
	})
})