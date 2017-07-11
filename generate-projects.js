var fs = require('fs');
var outfile = process.argv[2];
var number = process.argv[3];

fs.exists(outfile, function(exists) {
	if(exists) {

		fs.readFile(outfile, function (err, data) {
    	var obj = JSON.parse(data);
    	for(var i = 0; i < number; i++) {
			var nameVal = "project" + i;
			var companyVal = "company" + i;
			var departmentVal = "Department " + i;
			var descriptionVal = "Description " + i;

			obj.empty_2.push({
				name: nameVal,
				company: companyVal,
				department: departmentVal,
				description : descriptionVal
			});
			
		}

    	fs.writeFile(outfile, JSON.stringify(obj,null,4));
		});
	}
	else {
		var obj = {
			empty_2:[
				{
					name:"name",
					company: "company",
					department: "department",
					description : "description"
				}
			]
		}
		for(var i = 0; i < number;i++) {
			var nameVal = "project" + i;
			var companyVal = "company" + i;
			var departmentVal = "Department " + i;
			var descriptionVal = "Description " + i;

			obj.empty_2[i] = {
				name: nameVal,
				company: companyVal,
				department: departmentVal,
				description : descriptionVal
			};
			
		}
		json = JSON.stringify(obj, null,4);
		fs.writeFile(outfile,json);
	}
});

