# Test-wi-backend

Prerequisites: install **mocha**
[Mocha](https://mochajs.org/)

>utils:

## Projects

### Generate projects:

```
node generate-projects.js projects.json 100
```

* projects.json : output file 
* 100 : number projects expected generate

### New projects

```
mocha new-projects.js projects.json
```

* projects.json : input file (use output file from _Generate projects_)

### List all projects
```
mocha list-projects.js list-projects.json
```

* list-projects.json : output file 

### Delete all projects 
```
mocha delete-all-projects.js list-projects.json 
```

* list-projects.json : input file (use output file from _List all projects_)

## Wells

### New wells

```
mocha new-wells.js wells.json
```

* wells.json : input file 

### List all wells
```
mocha list-wells.js list-projects.json list-wells.json
```

* list-projects.json : input file (use output file from _List all projects_)
* list-wells.json : output file

### Delete all wells 
```
mocha delete-all-wells.js list-wells.json 
```

* list-wells.json : input file (use output file from _List all wells_)