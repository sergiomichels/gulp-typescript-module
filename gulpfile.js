var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build-ts', function() {

    var tsProject = ts.createProject('tsconfig.json',{
        typescript: require('typescript')
    });

    return gulp.src('./src/*.ts')
		.pipe(ts(tsProject))
});