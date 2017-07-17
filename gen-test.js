var testGenerator = require('test-generator').testGenerator;
var TestCases = [
    {
        types:"Project",
        action:[
{
   name: "NEW_PROJECT_PROJECT_NEW_OK_1",
   config: {
      endpoint: "http://54.169.109.34/project/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idProject: 1,
            name: "Test-Project",
            company: "UET",
            department: "FIT",
            description: "blablabla"
         }
      },
      body: {
         name: "Test-Project",
         company: "UET",
         department: "FIT",
         description: "blablabla"
      },
      strictCheck: true
   }
},
{
   name: "NEW_PROJECT_PROJECT_NEW_KO_METHOD_2",
   config: {
      endpoint: "http://54.169.109.34/project/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         type: "project",
         name: "Test-Project",
         company: "UET",
         department: "FIT",
         description: "blablabla"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PROJECT_PROJECT_EDIT_OK_3",
   config: {
      endpoint: "http://54.169.109.34/project/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Succsess",
         content: {
            idProject: 1,
            name: "Test-Project-change",
            company: "UET",
            department: "ABC Department",
            description: "This is a description"
         }
      },
      body: {
         idProject: 1,
         name: "Test-Project-change",
         company: "UET",
         department: "ABC Department",
         description: "This is a description"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PROJECT_PROJECT_EDIT_KO_METHOD_4",
   config: {
      endpoint: "http://54.169.109.34/project/edit",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idProject: 2,
         name: "Test-Project-change",
         company: "UET",
         department: "ABC Department",
         description: "This is a description"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PROJECT_PROJECT_EDIT_KO_PARAM_IDPROJECT_5",
   config: {
      endpoint: "http://54.169.109.34/project/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idProject: 100,
         name: "Test-Project-change",
         company: "UET",
         department: "ABC Department",
         description: "This is a description"
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PROJECT_PROJECT_DELETE_OK_6",
   config: {
      endpoint: "http://54.169.109.34/project/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "Succsess",
         content: {
            idProject: 1,
            name: "Test-Project-change",
            company: "UET",
            department: "ABC Department",
            description: "This is a description"
         }
      },
      body: {
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PROJECT_PROJECT_DELETE_KO_METHOD_7",
   config: {
      endpoint: "http://54.169.109.34/project/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idProject: 2
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PROJECT_PROJECT_DELETE_KO_PARAM_IDPROJECT_8",
   config: {
      endpoint: "http://54.169.109.34/project/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idProject: 100
      },
      strictCheck: true
   }
},
{
   name: "LIST_PROJECT_PROJECT_LIST_OK_9",
   config: {
      endpoint: "http://54.169.109.34/project/list",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Success",
         content: [
            {
               idProject: 1,
               type: "project",
               name: "Test-Project",
               company: "UET",
               department: "FIT",
               description: "blablabla"
            }
         ]
      },
      body: {},
      strictCheck: true
   }
},
{
   name: "LIST_PROJECT_PROJECT_LIST_KO_METHOD_10",
   config: {
      endpoint: "http://54.169.109.34/project/list",
      httpMethod: "GET",
      expectedRes: {},
      body: {},
      strictCheck: true
   }
},
{
   name: "INFO_PROJECT_PROJECT_INFO_OK_11",
   config: {
      endpoint: "http://54.169.109.34/project/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Succsess",
         content: {
            idProject: 1,
            name: "Test-Project-change",
            company: "UET",
            department: "ABC Department",
            description: "This is a description"
         }
      },
      body: {
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_PROJECT_PROJECT_INFO_KO_METHOD_12",
   config: {
      endpoint: "http://54.169.109.34/project/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_PROJECT_PROJECT_INFO_KO_PARAM_IDPROJECT_13",
   config: {
      endpoint: "http://54.169.109.34/project/info",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idProject: 100
      },
      strictCheck: true
   }
},
{
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_OK_14",
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
         idProject: 1
      },
      strictCheck: true
   }
},
{
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_KO_METHOD_15",
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
   name: "FULLINFO_PROJECT_PROJECT_FULLINFO_KO_PARAM_IDPROJECT_16",
   config: {
      endpoint: "http://54.169.109.34/project/fullinfo",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idProject: 100
      },
      strictCheck: true
   }
},
{
   name: "NEW_WELL_WELL_NEW_OK_17",
   config: {
      endpoint: "http://54.169.109.34/project/well/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idWell: 1,
            idProject: 1,
            name: "Ex-Well",
            topDepth: "10",
            bottomDepth: "50",
            step: "30"
         }
      },
      body: {
         idProject: 1,
         name: "Ex-Well",
         topDepth: "10",
         bottomDepth: "50",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "NEW_WELL_WELL_NEW_KO_METHOD_18",
   config: {
      endpoint: "http://54.169.109.34/project/well/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idProject: 1,
         name: "Ex-Well",
         topDepth: "10",
         bottomDepth: "50",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "NEW_WELL_WELL_NEW_KO_PARAM_IDPROJECT_19",
   config: {
      endpoint: "http://54.169.109.34/project/well/new",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idProject: 100,
         name: "Ex-Well",
         topDepth: "10",
         bottomDepth: "50",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_WELL_WELL_EDIT_OK_20",
   config: {
      endpoint: "http://54.169.109.34/project/well/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idWell: 1,
            idProject: 1,
            name: "Ex-Well-change",
            topDepth: "20",
            bottomDepth: "80",
            step: "30"
         }
      },
      body: {
         idWell: 1,
         idProject: 1,
         name: "Ex-Well-change",
         topDepth: "20",
         bottomDepth: "80",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_WELL_WELL_EDIT_KO_METHOD_21",
   config: {
      endpoint: "http://54.169.109.34/project/well/edit",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idWell: 2,
         idProject: 1,
         name: "Ex-Well-change",
         topDepth: "20",
         bottomDepth: "80",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_WELL_WELL_EDIT_KO_PARAM_IDWELL_22",
   config: {
      endpoint: "http://54.169.109.34/project/well/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 100,
         idProject: 1,
         type: "well",
         name: "Ex-Well-change",
         topDepth: "20",
         bottomDepth: "80",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_WELL_WELL_EDIT_KO_PARAM_IDPROJECT_23",
   config: {
      endpoint: "http://54.169.109.34/project/well/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 2,
         idProject: 10,
         type: "well",
         name: "Ex-Well-change",
         topDepth: "20",
         bottomDepth: "80",
         step: "30"
      },
      strictCheck: true
   }
},
{
   name: "DELETE_WELL_WELL_DELETE_OK_24",
   config: {
      endpoint: "http://54.169.109.34/project/well/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idWell: 1,
            idProject: 1,
            name: "Ex-Well-change",
            topDepth: "20",
            bottomDepth: "80",
            step: "30"
         }
      },
      body: {
         idWell: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_WELL_WELL_DELETE_KO_METHOD_25",
   config: {
      endpoint: "http://54.169.109.34/project/well/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idWell: 7
      },
      strictCheck: true
   }
},
{
   name: "DELETE_WELL_WELL_DELETE_KO_PARAM_IDWELL_26",
   config: {
      endpoint: "http://54.169.109.34/project/well/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 100
      },
      strictCheck: true
   }
},
{
   name: "INFO_WELL_WELL_VIEW_OK_27",
   config: {
      endpoint: "http://54.169.109.34/project/well/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idWell: 1,
            idProject: 1,
            name: "Ex-Well",
            topDepth: "20",
            bottomDepth: "80",
            step: "30"
         }
      },
      body: {
         idWell: 2
      },
      strictCheck: true
   }
},
{
   name: "INFO_WELL_WELL_INFO_KO_METHOD_28",
   config: {
      endpoint: "http://54.169.109.34/project/well/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idWell: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_WELL_WELL_INFO_KO_PARAM_IDWELL_29",
   config: {
      endpoint: "http://54.169.109.34/project/well/info",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 100
      },
      strictCheck: true
   }
},
{
   name: "NEW_DATASET_DATASET_NEW_OK_30",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Successl",
         content: {
            idWell: 14,
            idDataset: 1,
            name: "dataset-test"
         }
      },
      body: {
         idWell: 14,
         name: "dataset-test"
      },
      strictCheck: true
   }
},
{
   name: "NEW_DATASET_DATASET_NEW_KO_METHOD_31",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idWell: 14,
         name: "dataset-test"
      },
      strictCheck: true
   }
},
{
   name: "NEW_DATASET_DATASET_NEW_KO_PARAM_IDWELL_32",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/new",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 100,
         name: "dataset-test"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_DATASET_DATASET_EDIT_OK_33",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Successl",
         content: {
            idWell: 14,
            idDataset: 1,
            name: "dataset-test-change"
         }
      },
      body: {
         idDataset: 1,
         idWell: 14,
         name: "dataset-test-change"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_DATASET_DATASET_EDIT_KO_METHOD_34",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/edit",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDataset: 1,
         idWell: 14,
         name: "dataset-testchange"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_DATASET_DATASET_EDIT_KO_PARAM_IDWELL_35",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idDataset: 1,
         idWell: 100,
         name: "dataset-test"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_DATASET_DATASET_EDIT_KO_PARAM_IDDATASET_36",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idDataset: 100,
         idWell: 14,
         name: "dataset-test"
      },
      strictCheck: true
   }
},
{
   name: "DELETE_DATASET_DATASET_DELETE_OK_37",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "Successl",
         content: {
            idWell: 14,
            idDataset: 1,
            name: "dataset-test-change"
         }
      },
      body: {
         idDataset: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_DATASET_DATASET_DELETE_KO_METHOD_38",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDataset: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_DATASET_DATASET_DELETE_KO_PARAM_IDDATASET_39",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idDataset: 100
      },
      strictCheck: true
   }
},
{
   name: "INFO_DATASET_DATASET_INFO_OK_40",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "Success",
         content: {
            idWell: 14,
            idDataset: 1,
            name: "dataset-test-change"
         }
      },
      body: {
         idDataset: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_DATASET_DATASET_INFO_KO_METHOD_41",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDataset: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_DATASET_DATASET_INFO_KO_PARAM_IDDATASET_42",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/info",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idDataset: 100
      },
      strictCheck: true
   }
},
{
   name: "NEW_CURVE_CURVE_NEW_OK_43",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idCurve: 1,
            idDataset: 1,
            name: "Ex-Curve",
            dataset: "",
            family: "Rate of opreration",
            unit: "mn/m",
            initValue: "30"
         }
      },
      body: {
         idDataset: 1,
         name: "Ex-Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "30"
      },
      strictCheck: true
   }
},
{
   name: "NEW_CURVE _CURVE _NEW_KO_METHOD_44",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve /new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDataset: 1,
         name: "Ex-Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "30"
      },
      strictCheck: true
   }
},
{
   name: "NEW_CURVE_CURVE_NEW_KO_PARAM_IDDATASET_45",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/new",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idDataset: 100,
         name: "Ex-Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "30"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_CURVE_CURVE_EDIT_OK_46",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idDataset: 1,
            idCurve: 1,
            name: "Curve",
            dataset: "",
            family: "Rate of opreration",
            unit: "mn/m",
            initValue: "60"
         }
      },
      body: {
         idDataset: 1,
         idCurve: 1,
         name: "Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "60"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_CURVE_CURVE_EDIT_KO_METHOD_47",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/edit",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDataset: 1,
         idCurvel: 1,
         name: "Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "60"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_CURVE_CURVE_EDIT_KO_PARAM_IDDATASET_48",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idCurve: 100,
         name: "Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "60"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_CURVE_CURVE_EDIT_KO-PARAM_IDCURVE_49",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idCurve: 100,
         idDataset: 2,
         name: "Curve",
         dataset: "",
         family: "Rate of opreration",
         unit: "mn/m",
         initValue: "60"
      },
      strictCheck: true
   }
},
{
   name: "DELETE_CURVE_CURVE_DELETE_OK_50",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idCurve: 1,
            idWell: 1,
            name: "Curve",
            dataset: "",
            family: "Rate of opreration",
            unit: "mn/m",
            initValue: "60"
         }
      },
      body: {
         idCurve: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_CURVE_CURVE_DELETE_KO_METHOD_51",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idCurve: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_CURVE_CURVE_DELETE_KO_PARAM_IDCURVE_52",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idCurve: 100
      },
      strictCheck: true
   }
},
{
   name: "INFO_CURVE_CURVE_INFO_OK_53",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idCurve: 1,
            idDataset: 1,
            name: "Curve",
            dataset: "",
            family: "Rate of opreration",
            unit: "mn/m",
            initValue: "60"
         }
      },
      body: {
         idCurve: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_CURVE_CURVE_INFO_KO_METHOD_54",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idCurve: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_CURVE_CURVE_INFO_KO_PARAM_IDCURVE_55",
   config: {
      endpoint: "http://54.169.109.34/project/well/dataset/curve/info",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idCurve: 100
      },
      strictCheck: true
   }
},
{
   name: "NEW_PLOT_PLOT_NEW_OK_56",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idPlot: 1,
            idWell: 1,
            name: "Ex-Plot",
            option: "blank-plot"
         }
      },
      body: {
         idWell: 1,
         name: "Ex-Plot",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "NEW_PLOT_PLOT_NEW_KO_METHOD_57",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idWell: 4,
         name: "Ex-Plot",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "NEW_PLOT_PLOT_NEW_KO_PARAM_IDWELL_58",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/new",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idWell: 100,
         name: "Ex-Plot",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PLOT_PLOT_EDIT_OK_59",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idPlot: 1,
            idWell: 1,
            name: "Ex-Plot-change",
            option: "blank-plot"
         }
      },
      body: {
         idPlot: 1,
         idWell: 1,
         name: "Ex-Plot-change",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PLOT_PLOT_EDIT_KO_METHOD_60",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/edit",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idPlot: 1,
         idWell: 4,
         name: "Ex-Plot-change",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PLOT_PLOT_EDIT_KO_PARAM_IDWELL_61",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 512,
         reason: "fail",
         content: {}
      },
      body: {
         idPlot: 4,
         idWell: 100,
         name: "Ex-Plot-change",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "EDIT_PLOT_PLOT_EDIT_KO-PARAM_IDPLOT_62",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/edit",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idPlot: 100,
         idWell: 2,
         name: "Ex-Plot-change",
         option: "blank-plot"
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PLOT_PLOT_DELETE_OK_63",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idPlot: 1,
            idWell: 1,
            name: "Ex-Plot-change",
            option: "blank-plot"
         }
      },
      body: {
         idPlot: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PLOT_PLOT_DELETE_KO_METHOD_64",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idPlot: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_PLOT_PLOT_DELETE_KO_PARAM_IDPLOT_65",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idPlot: 100
      },
      strictCheck: true
   }
},
{
   name: "INFO_PLOT_PLOT_INFO_OK_66",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idPlot: 1,
            idWell: 1,
            name: "Ex-Plot-change",
            option: "blank-plot"
         }
      },
      body: {
         idPlot: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_PLOT_PLOT_INFO_KO_METHOD_67",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idPlot: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_PLOT_PLOT_INFO_KO_PARAM_IDCURVE_68",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/info",
      httpMethod: "POST",
      expectedRes: {
         code: 511,
         reason: "fail",
         content: {}
      },
      body: {
         idPlot: 100
      },
      strictCheck: true
   }
},
{
   name: "NEW_DEPTH-AXIS_DEPTH-AXIS_NEW_OK_69",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idDepthAxis: 1,
            idPlot: 4
         }
      },
      body: {
         idPlot: 4
      },
      strictCheck: true
   }
},
{
   name: "NEW_DEPTH-AXIS_DEPTH-AXIS_NEW_KO_METHOD_70",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idPlot: 5
      },
      strictCheck: true
   }
},
{
   name: "DELETE_DEPTH-AXIS_DEPTH-AXIS_DELETE_OK_71",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idDepthAxis: 1,
            idPlot: 4
         }
      },
      body: {
         idDepthAxis: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_DEPTH-AXIS_DEPTH-AXIS_DELETE_KO_METHOD_72",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDepthAxis: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_DEPTH-AXIS_DEPTH-AXIS_INFO_OK_73",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idDepthAxis: 1,
            idPlot: 4
         }
      },
      body: {
         idDepthAxis: 4
      },
      strictCheck: true
   }
},
{
   name: "INFO_DEPTH-AXIS_DEPTH-AXIS_INFO_KO_METHOD_74",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/depth-axis/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idDepthAxis: 1
      },
      strictCheck: true
   }
},
{
   name: "NEW_TRACK_TRACK_NEW_OK_75",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/new",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idTrack: 1,
            idPlot: 4
         }
      },
      body: {
         idPlot: 4
      },
      strictCheck: true
   }
},
{
   name: "NEW_TRACK_TRACK_NEW_KO_METHOD_76",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/new",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idPlot: 5
      },
      strictCheck: true
   }
},
{
   name: "DELETE_TRACK_TRACK_DELETE_OK_77",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/delete",
      httpMethod: "DELETE",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idTrack: 1,
            idPlot: 4
         }
      },
      body: {
         idTrack: 1
      },
      strictCheck: true
   }
},
{
   name: "DELETE_TRACK_TRACK_DELETE_KO_METHOD_78",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/delete",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idTrack: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_TRACK_TRACK_INFO_OK_79",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/info",
      httpMethod: "POST",
      expectedRes: {
         code: 200,
         reason: "success",
         content: {
            idTrack: 1,
            idPlot: 4
         }
      },
      body: {
         idTrack: 1
      },
      strictCheck: true
   }
},
{
   name: "INFO_TRACK_TRACK_INFO_KO_METHOD_80",
   config: {
      endpoint: "http://54.169.109.34/project/well/plot/track/info",
      httpMethod: "GET",
      expectedRes: {},
      body: {
         idTrack: 1
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