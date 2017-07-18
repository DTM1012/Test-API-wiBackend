'use strict';
var request = require('superagent').agent();
var token = null;
var key = null;
var fs = require('fs');

var url = require('../config');
var baseURL = url.baseURL;

var outfile = process.argv[3];
//outfile : project.json
describe('POST: "'+ baseURL + 'project/list" API', function() {

    let response;
    let body;
    before((done)=>{
        request
		.post(baseURL + "project/list").send({})
		.end(function(err, res){
			response = res;
            body = res.body;
			done();
		})
    })
   
    it('save content to file ' + outfile, () => {
        fs.writeFileSync(outfile, JSON.stringify(body.content, null, 2));
    })
});