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
var projects = JSON.parse(content.toString());

for (var i = 0; i < projects.length; i++) {
    let idProject = projects[i].idProject;
    describe('POST: "http://54.169.109.34/project/info" API', function() {

        let response;
        let body;
        before((done)=>{
            request
            .post("http://54.169.109.34/project/info").send({"idProject":idProject})
            .end(function(err, res){
                response = res;
                body = res.body;
                done();
            })
        })
        
        it('List well ', () => {
            // console.log(JSON.stringify(body.content.wells, null, 4));
            fs.writeFileSync(outfile, JSON.stringify(body.content.wells, null, 4))
        })
    });
}
