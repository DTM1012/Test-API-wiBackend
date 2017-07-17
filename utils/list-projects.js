'use strict';
var request = require('superagent').agent();
var token = null;
var key = null;
var fs = require('fs');
var outfile = process.argv[3];
//outfile : project.json
describe('POST: "http://localhost:3000/project/list" API', function() {

    let response;
    let body;
    before((done)=>{
        request
		.post("http://localhost:3000/project/list").send({})
		.end(function(err, res){
			response = res;
            body = res.body;
			done();
		})
    })
   
    it('save content to file ' + outfile, () => {
        // console.log(body.content);
        fs.writeFileSync(outfile, JSON.stringify(body.content, null, 2));
    })
});