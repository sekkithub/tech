var yargs        = require('yargs')
var gulpIf       = require('gulp-if');

var dest = ".";
var src = './src';
var compiledSiteDir = '_site';

module.exports = {
    browserSync: {
        files: [
            "./css/**",
            "./js/**",
            "_includes/**",
            "_layouts/**",
            "_posts/**",
            // Exclude Map files
            "!" + dest + "/**.map"
        ],
        server: {
            baseDir: compiledSiteDir
        }
    },
    sass: {
        production: yargs.argv.production,
        src: src + '/styles/*.{sass,scss}',
        watch: src + '/styles/*.{sass,scss}',
        dest: dest + '/css',
        compiledDest: compiledSiteDir + '/css',
        settings: {
            sourcemap: true
        }
    },
    images: {
        src: src + "/assets/images/**",
        watch: src + "/assets/images/**",
        dest: dest + "/assets/images"
    },
    browserify: {
        production: yargs.argv.production,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/scripts/main.js',
            dest: dest + '/js',
            compiledDest: compiledSiteDir + '/js',
            outputName: 'main.js'
        }]
    },
    templates: {
        watch: ['*.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*', 'assets/**', 'modules/**/*.html']
    }
};