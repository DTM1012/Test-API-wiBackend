'use strict';
var chai = require('chai');
var expect = chai.expect;
var request = require('superagent').agent();
var token = null;
var key = null;

var url = require('../config');
var baseURL = url.baseURL;

var infile = process.argv[3];
var fs = require('fs');
var content = fs.readFileSync(infile);

var wells = JSON.parse(content.toString());
for(var i = 0; i < wells.length; i++) {
    let id = wells[i].idWell;
    describe('DELETE: "'+ baseURL + 'project/well/delete" API', function() {
	    let response;
	    let body;
	    before((done)=>{
	        request
			.delete(baseURL + "project/well/delete").send({"idWell":id})
			.end(function(err, res){
				response = res;
	            body = res.body;
				done();
			})
	    })
	    
	    it('Delete wells success', () => {
	        expect(response.statusCode).to.equal(200)
	    })
	});
}