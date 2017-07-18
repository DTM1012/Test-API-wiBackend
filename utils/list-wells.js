'use strict';
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var token = null;
var key = null;

var promiseMocha = require('mocha-as-promised');

var stringifyObj = require('stringify-object');

var url = require('../config');
var baseURL = url.baseURL;

var infile = process.argv[3];
var outfile = process.argv[4];

var fs = require('fs');
var content = fs.readFileSync(infile);
var projects = JSON.parse(content.toString());

// fs.writeFileSync(outfile, "[");
// data = JSON.parse(data);
var data = [];

for (var i = 0; i < projects.length; i++) {
    let idProject = projects[i].idProject;
    describe('POST: "'+ baseURL + 'project/info" API', function() {

        let response;
        let body;
        before((done)=>{
            request
            .post(baseURL + "project/info").send({"idProject":idProject})
            .end(function(err, res){
                response = res;
                body = res.body;
                done();
            })
        })
        
        it('List well ', function(){
            var wellsData = body.content.wells;
            for(var j = 0; j < wellsData.length; j++) {
                // fs.appendFileSync(outfile, JSON.stringify(wellsData[j], null, 4));
                // fs.appendFileSync(outfile, ',');
                data.push(wellsData[j]);
            }
            fs.writeFileSync(outfile, JSON.stringify(data, null, 4));
        })
    });

}
// fs.appendFileSync(outfile, "]");


