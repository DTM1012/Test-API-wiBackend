'use strict';
var fs = require('fs');
var outfile = process.argv[2];
var number = process.argv[3];

fs.exists(outfile, function(exists) {
	if(!exists) {
    	fs.writeFileSync(outfile, "");
	}
	else {
		var data = [
				{
					name:"name",
					company: "company",
					department: "department",
					description : "description"
				}
			]
		for(var i = 0; i < number;i++) {
			var nameVal = "project" + i;
			var companyVal = "company" + i;
			var departmentVal = "Department " + i;
			var descriptionVal = "Description " + i;

			data[i] = {
				name: nameVal,
				company: companyVal,
				department: departmentVal,
				description : descriptionVal
			};
			
		}
		json = JSON.stringify(data, null,4);
		fs.writeFileSync(outfile,json);
	}
});


