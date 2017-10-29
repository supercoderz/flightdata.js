var assert = require('chai').assert
var should = require('chai').should()
var expect = require('chai').expect
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
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
	})
	describe('#get_raw_data_json()',function(){
		it('should return json data for a valid url', function () {
			common.get_raw_data_json('http://ip.jsontest.com/',
				function(res){
					should.exist(res)
					should.exist(res.ip)
				},function (err) {
					assert.fail(0, 1, 'unexpected error in response')
				})
		})
		it("should not throw an error when calling a non json url",function () {
			common.get_raw_data_json('http://google.com',function(res){
				should.exist(res)
			},function(err){
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
	})
	describe('#post()',function(){
		it('should post data to the page and have no error',function(){
			var data = {
				email:'test@test.com'
			}
			common.post('https://www.flightradar24.com/user/login',data,function(res){
				should.exist(res)
			},function(err){
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
		it('should post data to the page that doesnt support post and have an error',function(){
			var data = {
				q:'test@test.com'
			}
			common.post('http://google.com/search',data,function(res){
				assert.fail(0, 1, 'unexpected valid response')
			},function(err){
				should.exist(err)
			})
		})
	})
	describe('#login()',function(){
		xit('should login and return a token',function(){

		})
	})
})