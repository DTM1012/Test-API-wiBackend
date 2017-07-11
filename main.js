var testGenerator = require('test-generator').testGenerator;
var TestCases = [
	{
		types : "Project",
		action : [
			{
				name: "NewProject",
				config: {
				    endpoint: "http://54.255.212.141/project/new", // endpoint to generate test cases 
				    httpMethod: 'post', // http method  
				    expectedRes: { name: "expected name" }, // expected response of api 
				    body: {
						  "type": "project",
						  "name": "Test-Project",
						  "company": "UET",
						  "department": "FIT",
						  "description": "blablabla"
					}, // body to pass to the api { 'username': 'test', 'password': 'test' }  
				    strictCheck: true // true to deep check response otherwise false  
				}
			},
			{
				name : "EditProject",
				config : {
					endpoint : "http://54.255.212.141/project/edit",
					httpMethod : 'post',
					expectedRes : {
						description : "edit project"
					},
					body : {
					  "idProject": 123,
					  "type": "project",
					  "name": "Test-Project-change",
					  "company": "Viettel",
					  "department": "ABC Department",
					  "description": "This is a description"
					},
					strictCheck : true
				}
			}
		]	
	},
	{
		types : "Well",
		action : [
			{
				name: "NewWell",
				config: {
				    endpoint: "http://54.255.212.141/project/well/new", // endpoint to generate test cases 
				    httpMethod: 'post', // http method  
				    expectedRes: { name: "expected name" }, // expected response of api 
				    body: {
						  "idProject": 123,
						  "type": "well",
						  "name": "Ex-Well",
						  "topDepth": "10",
						  "bottomDepth": "50",
						  "step": "30"
					}, // body to pass to the api { 'username': 'test', 'password': 'test' }  
				    strictCheck: true // true to deep check response otherwise false  
				}
			},
			{
				name : "EditWell",
				config : {
					endpoint : "http://54.255.212.141/project/well/edit",
					httpMethod : 'post',
					expectedRes : {
						description : "edit well"
					},
					body : {
						  "idWell": 132,
						  "idProject": 123,
						  "type": "well",
						  "name": "Ex-Well-change",
						  "topDepth": "20",
						  "bottomDepth": "80",
						  "step": "30"
					},
					strictCheck : true
				}
			}
		]		
	},
	{
		types : "Curve",
		action : [
			{
				name : "NewCurve",
				config : {
					endpoint : "http://54.255.212.141/project/well/curve/new",
					httpMethod : "post",
					expectedRes : {
						description : "new curve"
					},
					body : {
						"idWell": 132,
						"type":"curve",
						"name":"Ex-Curve",
						"dataset": "",
						"family":"Rate of opreration",
						"unit": "mn/m",
						"ini-value":"30"
					},
					strictCheck : true
				}
			},
			{
				name : "EditCurve",
				config : {
					endpoint : "http://54.255.212.141/project/well/curve/edit",
					httpMethod : "post",
					expectedRes : {
						description : "edit curve"
					},
					body : {
						"idCurve":33,
						"idWell": 132,
						"type":"curve",
						"name":"Ex-Curve",
						"dataset": "",
						"family":"Rate of opreration",
						"unit": "mn/m",
						"ini-value":"60"
					},
					strictCheck : true
				}
			}
		]
	},
	{
		types : "Plot",
		action : [
			{
				name : "NewPlot",
				config : {
					endpoint : "http://54.255.212.141/project/well/curve/plot/new",
					httpMethod : "post",
					expectedRes : {
						description : "new plot"
					},
					body : {
						  "type": "plot",
						  "idProject": 123,
						  "name": "Ex-Plot",
						  "option": "blank-plot"
					},
					strictCheck : true
				}
			},
			{
				name : "EditPlot",
				config : {
					endpoint : "http://54.255.212.141/project/well/curve/plot/edit",
					httpMethod : "post",
					expectedRes : {
						description : "edit plot"
					},
					body : {
					},
					strictCheck : true
				}
			}
		]
	}
];

TestCases.forEach(function(testcase) {
	testcase.action.forEach(function(subTestcase) {
		subTestcase.config.testFile = __dirname +'/testcases/' + subTestcase.name + ".js";
		testGenerator(subTestcase.config, function(error, info) {
			console.log(error, info);
		})
	})
});




