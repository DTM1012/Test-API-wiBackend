var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var token = null;
var key = null;
var infile = process.argv[3];
var fs = require('fs');
var content = fs.readFileSync(infile);
var stringifyObj = require('stringify-object');

var projects = JSON.parse(content.toString()) ;

for(var i = 0; i < projects.length; i++) {
    let project = projects[i];
    describe('POST: "http://54.169.109.34/project/new" API', function() {

    let response;
    let body;
    before((done)=>{
        request
        .post("http://54.169.109.34/project/new").send(project)
        .end(function(err, res){
            response = res;
            body = res.body;
            done();
        })
    })
    
    it('Add new projects', () => {
        expect(response.statusCode).to.equal(200)
    })
});
}
