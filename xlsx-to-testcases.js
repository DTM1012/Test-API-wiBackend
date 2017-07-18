'use strict';
var testGenerator = require('test-generator').testGenerator;
const XLSX = require('xlsx');
const fs = require('fs');
var stringifyObj = require('stringify-object');

var XLSXFile = 'test-wi-backend-2.xlsx';
var TestCaseFile = 'testcases.js';

let sheetName = 'Test_plan';

let workbook = XLSX.readFile(XLSXFile);
let worksheet = workbook.Sheets[sheetName];

let range = XLSX.utils.decode_range(worksheet['!ref']);

let genFile = 'gen-test.js';

fs.writeFileSync(genFile, 'var testGenerator = require(\'test-generator\').testGenerator;\n');
fs.appendFileSync(genFile, 'var TestCases = [\n');

var projectArr =[];
var wellArr = [];
var datasetArr = [];
var curveArr = [];
var plotArr = [];
var depthAxisArr = [];
var trackArr = [];
var baseURL = 'http://54.169.109.34/';

for (var row = range.s.r + 1; row <= range.e.r; row++) {

    let subplan = getValueAtCell(row, 2, worksheet);
    let plan = getValueAtCell(row, 1, worksheet);
    let httpMethod = getValueAtCell(row, 6, worksheet);
    let expectedRes = getValueAtCell(row, 7, worksheet);
    let body = getValueAtCell(row, 5, worksheet);
    let stt = getValueAtCell(row, 0, worksheet);
    let type = getValueAtCell(row, 4, worksheet);
    switch(plan.trim().toLowerCase()){
        case 'project':
            projectArr.push({
                name : (subplan +'_'+ plan +'_'+ type +'_'+ stt).toUpperCase(),
                config : {
                    endpoint : baseURL + plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'well':
            wellArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/' +plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'dataset':
            curveArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/well/'+ plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'curve':
            curveArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/well/dataset/'+ plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'plot':
            plotArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/well/'+ plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'depth-axis':
            depthAxisArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/well/plot/' + plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
        case 'track':
            trackArr.push({
                name : (subplan +'_'+ plan +'_'+type + '_' +stt).toUpperCase(),
                config : {
                    endpoint : baseURL + 'project/well/plot/' + plan + '/' + subplan,
                    httpMethod : httpMethod,
                    expectedRes : JSON.parse(expectedRes),
                    body : JSON.parse(body),
                    strictCheck : true
                }
            });
            break;
    }
}
fs.appendFileSync(genFile, '    {\n');
fs.appendFileSync(genFile, '        types:"Project",\n');
fs.appendFileSync(genFile, '        action:[\n');

projectArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
wellArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
datasetArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
curveArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
plotArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
depthAxisArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});
trackArr.forEach(function (item) {
    fs.appendFileSync(genFile, stringifyObj(item, { indent: '   ', singleQuotes: false})+ ',\n');
});

fs.appendFileSync(genFile, '        ]\n');
fs.appendFileSync(genFile, '    },\n');
fs.appendFileSync(genFile, '];\n');
fs.appendFileSync(genFile, 'TestCases.forEach(function(testcase) {\n');
fs.appendFileSync(genFile, '    testcase.action.forEach(function(subTestcase) {\n');
fs.appendFileSync(genFile, '        subTestcase.config.testFile = __dirname +\'/testcases/\' + subTestcase.name + ".js";\n');
fs.appendFileSync(genFile, '        testGenerator(subTestcase.config, function(error, info) {\n');
fs.appendFileSync(genFile, '            console.log(error, info);\n');
fs.appendFileSync(genFile, '        });\n' +
                           '    });\n' +
                           '});');

function getValueAtCell(rowIndex, colIndex, sheet) {
    let cellPositionObject = {r: rowIndex, c: colIndex};
    let cellPositionString = XLSX.utils.encode_cell(cellPositionObject);
    let cell = sheet[cellPositionString];
    if (typeof cell === 'undefined') {
        return "";
    }
    return cell.v;
}
