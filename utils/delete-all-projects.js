var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var request = require('superagent').agent();
var token = null;
var key = null;
var infile = process.argv[3];
var fs = require('fs');
var content = fs.readFileSync(infile);

var projects = JSON.parse(content.toString());
for(var i = 0; i < projects.length; i++) {
    let id = projects[i].idProject;
    describe('DELETE: "http://54.169.109.34/project/delete" API', function() {
        let response;
        let body;
        before((done)=>{
            request
            .delete("http://54.169.109.34/project/delete").send({"idProject":id})
            .end(function(err, res){
                response = res;
                body = res.body;
                done();
            })
        })       
        it('delete success', () => {
            expect(response.statusCode).to.equal(200)
        })
    });
}
