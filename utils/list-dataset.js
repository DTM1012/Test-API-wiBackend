'use strict';
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var token = null;
var key = null;

var stringifyObj = require('stringify-object');

var infile = process.argv[3];
var outfile = process.argv[4];

var fs = require('fs');
var content = fs.readFileSync(infile);
var wells = JSON.parse(content.toString());
//infile: wells.json
fs.writeFileSync(outfile, "[");

for (var i = 0; i < wells.length; i++) {
    let idWell = wells[i].idWell;
    describe('POST: "http://54.169.109.34/project/well/info" API', function() {

        let response;
        let body;
        before((done)=>{
            request
            .post("http://54.169.109.34/project/well/info").send({"idWell":idWell})
            .end(function(err, res){
                response = res;
                body = res.body;
                done();
            })
        })
        
        it('List dataset ', () => {
            let datasetsData = body.content.datasets; 
            // console.log(datasetsData);
            for(var i = 0; i < datasetsData.length; i++) {
                fs.appendFileSync(outfile, JSON.stringify(datasetsData[i], null, 4));
                fs.appendFileSync(outfile, ',');
            }
        })
    });
}
fs.appendFileSync(outfile, "] ");

