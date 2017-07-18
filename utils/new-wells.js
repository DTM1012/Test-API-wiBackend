'use strict'
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var token = null;
var key = null;

var stringifyObj = require('stringify-object');

var infile = process.argv[3];
var fs = require('fs');
var content = fs.readFileSync(infile);
var wells = JSON.parse(content.toString());

for (var i = 0; i < wells.length; i++) {
    let well = wells[i];
    describe('POST: "http://localhost:3000/project/well/new" API', function() {

    let response;
    let body;
    before((done)=>{
        request
        .post("http://localhost:3000/project/well/new").send(well)
        .end(function(err, res){
            response = res;
            body = res.body;
            done();
        })
    })
    
    it('Add wells ', () => {
        expect(response.statusCode).to.equal(200)
    })
});
}
