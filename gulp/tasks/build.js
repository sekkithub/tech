var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'jekyll-build']);