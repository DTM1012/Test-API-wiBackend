var gulp = require('gulp');
var mocha = require('gulp-mocha');
var dest = require('gulp-dest');
var rename = require('gulp-rename');

gulp.task('list', function(){
	gulp.src('./utils/list-projects.js', {read: true})
		.pipe(mocha({
			reporter: false
		}))
		.pipe(gulp.dest('./utils'))
	}
);

gulp.task('rename', function(){
	gulp.src("./--colors")
		.pipe(rename("projects.json"))
		.pipe(gulp.dest('./utils'))
});

// gulp.task('save', ['list', 'rename'], function(){
// });
gulp.task('delete', function(){
	gulp.src('./utils/delete-all-projects.js', {read: true})
		.pipe(mocha({
			reporter: false
		}))
		.pipe(gulp.dest('./utils'))
	}
);

gulp.task('all', ['list', 'rename', 'delete'], function(){

});