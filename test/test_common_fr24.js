var assert = require('chai').assert
var should = require('chai').should()
var expect = require('chai').expect
var common = require('../lib/common.js')
var util = require('util')
var fr24 = require('../lib/common_fr24.js')

describe('FR24 common tests',function(){
	describe('#login()',function(){
		it('should login and return a token',function(){
			fr24.login('test@test.com','password',function(res){
				should.exist(res)
			},function(err){
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
	})
	describe('#get_data(url)',function(){
		it('should return the data for a flight route from the url in json format',function(){
			fr24.get_data(fr24.FLT_BASE('AI101'),function(res){
				should.exist(res)
			},function(err){
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
		it('should return the data for a aircraft reg from the url in json format',function(){
			fr24.get_data(fr24.REG_BASE('9V-SMA'),function(res){
				should.exist(res)
			},function(err){
				assert.fail(0, 1, 'unexpected error in response')
			})
		})
	})
})