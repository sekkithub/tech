var gulp         = require('gulp');
var gulpIf       = require('gulp-if');
var browserSync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCSS    = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return sass(config.src, config.settings) 
        .on('error', handleErrors)
        .pipe(autoprefixer({ browsers: ['last 3 version'] }))
        .pipe(gulpIf(config.production, minifyCSS()))
        .pipe(gulpIf(!config.production, sourcemaps.write()))
        .pipe(gulp.dest(config.compiledDest))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest));
});