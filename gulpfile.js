var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var css = require('gulp-minify-css');
var rename = require('gulp-rename');
var cleanhtml = require('gulp-cleanhtml');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html', 'src/css/*.css'],
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  CSS: ['src/css/*.css'],
  OUT: 'build.js',
  MINIFIED_OUT: 'build.min.js',
  MINIFIED_CSS: 'build.min.css',
  CSS_OUT: 'main.css',
  DEST: 'dist',
	DEST_SRC: 'dist/src',
 	DEST_DEBUG: 'dist/debug',
 	DEST_DEBUG_CSS: 'dist/debug/css',
 	DEST_DEBUG_JS: 'dist/debug/js',
  DEST_BUILD: 'dist/build',
  DEST_BUILD_CSS: 'dist/build/css',
 	DEST_BUILD_JS: 'dist/build/js',
  DEST_BUILD_JS_FILES: ['dist/build/js/*.js', 'dist/build/js/**/*.js'],
  ENTRY_POINT: './src/js/App.js'
};

//Copy index.html to the dist/debug folder
// gulp.task('copyDev', function(){
// 	gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST_DEBUG));
// });

//Copy index.html to the dist folder
// gulp.task('copyProd', function(){
// 	gulp.src(path.HTML)
//     .pipe(gulp.dest(path.BUILD));
// });

//Print out error messages
//Play error sound
var onError = function (err) {  
  gutil.beep();
  gutil.log(gutil.colors.red('Error (' + err.plugin + '): ' + err.message));
  this.emit('end'); // Keep gulp from hanging on this task, possibly not required
};

//Let's copy css
gulp.task('cssDev', function () {
    return gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST_DEBUG_CSS));
});

//Let's minify css
gulp.task('cssProd', function () {
    return gulp.src(path.CSS)
        .pipe(css())
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest(path.DEST_BUILD_CSS));
});

gulp.task('replaceHTMLDev', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'js/' + path.OUT,
      'css': 'css/' + path.CSS_OUT,
    }))
    .pipe(gulp.dest(path.DEST_DEBUG));
});

//Replace html, specifically javascript sources with the bundle for production
//"js:build" is the key it will look for in our index.html file
gulp.task('replaceHTMLProd', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'js/' + path.MINIFIED_OUT,
      'css': 'css/' + path.MINIFIED_CSS
    }))
    .pipe(cleanhtml())
    .pipe(gulp.dest(path.DEST_BUILD));
});

//Watch task, keeps running waiting for changes to files
//auto .end function with a one hour delay, we don't want gulp runing when not in use
//if you do want it always running just comment/remove the code after the first line of code
gulp.task('watch', function() {

	//Setup a watcher for our html file, copy when changed
	// var watcherGulp = gulp.watch(path.HTML, ['copy']);
	//Setup a watcher for all files, but only execute copy (only copies html files).
	//This way we get to watch for changes on all files to keep the timeout working,
	//while mantaining a separate watchify watcher to handle changes that need to be
	//browserified
	// var watcherJS = gulp.watch(path.JS, ['cssDev']);
  var watcherCSS = gulp.watch(path.CSS, ['cssDev']);
  var watcherHTML = gulp.watch(path.HTML, ['replaceHTMLDev']);

	//Watchify takes a browserify object
	var watcher = watchify(browserify({
		//Setting up browserify "configurations"
		//We give the entry point to our app, browserify knows how to handle all other components
		//the entry point is the main component app.js
		entries: [path.ENTRY_POINT],
		//Tell browserify what transform to apply, in this case we use reactify to
		//transpile jsx to js
    	transform: [reactify],
    	//this makes it so that when there is an error in the code, it will reference the line
    	//in the original jsx file, not the transpiled js. Source map magic!
    	debug: true,
    	//Not sure what this does, copied from the watchify website
    	cache: {}, packageCache: {}, fullPaths: true
  	})
  );
  //The actual browserify bundling function
  var rebundle = function () {
    var start = Date.now();
    gutil.log('Building APP bundle');
    watcher
      .bundle()
      .on('error', onError)
      // .pipe(plumber({ errorHandler: onError }))
      //we take the output
      .pipe(source(path.OUT))
      //and send it to dest/src
      .pipe(gulp.dest(path.DEST_DEBUG_JS)); 
      gutil.log('APP bundle built in ' + (Date.now() - start) + 'ms');
  };

	// Basic JavaScript: After one hour, we call
    // watcher.end to end the watch process and thus
    // Gulp, too.
    var timeout = setTimeout(function () {
      watcherHTML.end
      watcherCSS.end
      watcher.end
    }, 60*60*1000);

    // Should one of our watched files change ...
    watcherCSS.on('change', function() {
    	// .. we clear the timeout call we created earlier ...
    	clearTimeout(timeout);
    	// .. and start it anew ...
    	timeout = setTimeout(function () {
        watcherHTML.end
        watcherCSS.end
        watcher.end
      }, 60*60*1000);
    });
    watcherHTML.on('change', function() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        watcherHTML.end
        watcherCSS.end
        watcher.end
      }, 60*60*1000);
    });
    watcher.on('change', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          watcherHTML.end
          watcherCSS.end
          watcher.end
        }, 60*60*1000);
    });
    //Watch for updates on jsx files (app.js and it's children components)
  	watcher.on('update', rebundle);
    rebundle();
});
//Lints production js
gulp.task('lintProd', function () {
  return gulp.src(path.DEST_BUILD_JS_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
//Build = transpile + minify + uglify
gulp.task('build', function(){
	//as explained in 'watch' function
	browserify({
	    entries: [path.ENTRY_POINT],
	    transform: [reactify]
	  })    
	  	//Concatenate everything to one file
	  	//make requires work
	    .bundle() 
      .on('error', onError)
	    //we take the minified output from browserify
	    //it generates both normal and minified results
	    .pipe(source(path.MINIFIED_OUT))  
	    //we uglify it
	    .pipe(streamify(uglify( { file:path.MINIFIED_OUT })))
	    //we send it to dist/build
	    .pipe(gulp.dest(path.DEST_BUILD_JS));
});

//Run dev tasks
gulp.task('dev', ['replaceHTMLDev', 'cssDev', 'watch']);
//Run prod tasks
gulp.task('prod', ['lintProd', 'replaceHTMLProd', 'cssProd', 'build', 'lintProd']);

    // .pipe(plumber({ errorHandler: onError }))
    // .pipe(plumber.stop())

        //    .on('error', function(err) {
        //     return notify().write(err);
        // })