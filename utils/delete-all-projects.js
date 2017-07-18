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

var projects = JSON.parse(content.toString());
for(var i = 0; i < projects.length; i++) {
    let id = projects[i].idProject;
    describe('DELETE: "http://localhost:3000/project/delete" API', function() {
        let response;
        let body;
        before((done)=>{
            request
            .delete("http://localhost:3000/project/delete").send({"idProject":id})
            .end(function(err, res){
                response = res;
                body = res.body;
                done();
            })
        })       
        it('delete project success', () => {
            expect(response.statusCode).to.equal(200)
        })
    });
}
