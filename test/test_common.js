var assert = require('assert')
var common = require('../lib/common.js')


describe('Common tests', function(){
	describe('#get_page_or_none()',function(){
		it('should return none for invalid page',function(){
			assert.equal(common.get_page_or_none('invalid_url'),null)
		})
		xit('should retrun the page content for a valid page address',function(){
			assert.notEqual(common.get_page_or_none('www.google.com'),null)
		})
	})
	describe('#get_raw_data_json()',function(){
		xit('should return non if the data from url is not json',function(){

		})
		xit('should return json data for a valid url', function () {
			
		})
	})
})