var testGenerator = require('test-generator').testGenerator;
var TestCases = [
    {
        types:"Project",
        action:[
{
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_OK_",
   config: {
      endpoint: "http://54.169.109.34/project/fullinfo",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "succsess",
         content: {}
      },
      body: {
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_KO_METHOD_",
   config: {
      endpoint: "http://54.169.109.34/project/fullinfo",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_KO_PARAM_IDPROJECT_",
   config: {
      endpoint: "http://54.169.109.34/project/fullinfo",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Success",
         content: {
            idProject: 1,
            name: "Project-new",
            location: "",
            company: "VNU",
            department: "UET-FIT",
            description: "blablabla",
            createdAt: "2017-07-10T08:02:35.000Z",
            updatedAt: "2017-07-10T08:02:35.000Z",
            wells: [
               {
                  idWell: 1,
                  name: "Ex-Well",
                  topDepth: "10",
                  bottomDepth: "50",
                  step: "30",
                  createdAt: "2017-07-10T08:03:26.000Z",
                  updatedAt: "2017-07-10T08:03:26.000Z",
                  idProject: 1,
                  datasets: [
                     {
                        idDataset: 6,
                        name: "dataset-test",
                        idWell: 1,
                        createdAt: "2017-07-10T08:32:02.000Z",
                        updatedAt: "2017-07-10T08:32:02.000Z",
                        curves: [
                           {
                              idCurve: 2,
                              name: "Curve",
                              dataset: "",
                              family: "Rate of opreration",
                              unit: "mn/m",
                              initValue: "60",
                              createdAt: "2017-07-10T08:28:06.000Z",
                              updatedAt: "2017-07-10T08:34:44.000Z",
                              idDataset: 6
                           }
                        ]
                     },
                     {
                        idDataset: 3,
                        name: "dataset-test-2",
                        idWell: 1,
                        createdAt: "2017-07-10T08:06:24.000Z",
                        updatedAt: "2017-07-10T08:06:24.000Z",
                        curves: []
                     }
                  ],
                  plots: []
               }
            ]
         }
      },
      body: {
         idProject: 100
      },
      strictCheck: true
   }
},
        ]
    },
];
TestCases.forEach(function(testcase) {
    testcase.action.forEach(function(subTestcase) {
        subTestcase.config.testFile = __dirname +'/testcases/' + subTestcase.name + ".js";
        testGenerator(subTestcase.config, function(error, info) {
            console.log(error, info);
        });
    });
});