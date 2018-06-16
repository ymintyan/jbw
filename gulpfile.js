var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer')

//sass
gulp.task('sass', function()
{
	return gulp.src('sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(
				{
					browsers: ['last 15 versions'],
					cascade: false
				}))
		.pipe(gulp.dest('assets/css/'))
})


// default
gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass'])
})
 
gulp.task('default', ['watch', 'sass'])