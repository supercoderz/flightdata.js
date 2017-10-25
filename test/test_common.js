var assert = require('chai').assert
var should = require('chai').should()
var common = require('../lib/common.js')
var util = require('util')


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
		it('should return json data for a valid url', function () {
			common.get_raw_data_json('https://api.github.com/users/hari-allamraju/repos',
				function(res){
					should.exist(res)
					should.exist(res[0].name)
				},function (err) {
					assert.fail(true,false,'')
				})
		})
	})
})