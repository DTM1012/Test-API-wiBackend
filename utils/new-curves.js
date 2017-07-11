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
var curves = JSON.parse(content.toString());

for (var i = 0; i < curves.length; i++) {
    let curve = curves[i];
    describe('POST: "http://54.169.109.34/project/well/curve/new" API', function() {

    let response;
    let body;
    before((done)=>{
        request
        .post("http://54.169.109.34/project/well/curve/new").send(curve)
        .end(function(err, res){
            response = res;
            body = res.body;
            done();
        })
    })
    
    it('Add new curve ', () => {
        expect(response.statusCode).to.equal(200)
    })
});
}
