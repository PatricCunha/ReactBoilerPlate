# React Project BoilerPlate

## Do you need...
**Minified** css and js? **Uglified** js? **Transpiled** jsx? Separate debug and release folders?
A folder structure that kind of makes sense? **Browserified** js? On the fly browserfication?
Install scripts for the ~10 npm modules required? Clean html? Auto generated stylish **JSlint**?
 
Use this boilerplate project.
 
## Do you also want...
Auto updating files in your browser during development?
 
Well... that's coming soon™

## Details

This project includes a basic folder structure, a list of modules to be installed, some example .jsx files to show how to use "requires" to include more modules using browserify, a sample .html file, some scripts to install necessary modules and of course our gulpfile to automate everything.
 
To make everything work this project uses the following **npm** modules:

### [gulp](http://gulpjs.com/)
 -  For our automation needs.

### [browserify](http://browserify.org/)
 -  To bundle dependencies.

### [reactify](https://github.com/andreypopp/reactify)
 - Browserify transform to precompile our .jsx to plain javascript

### [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace)
 - To update html references to our source files.

### [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
 - To minify our css, it uses [clean-css](https://github.com/jakubpawlowicz/clean-css).

### [gulp-rename](https://www.npmjs.com/package/gulp-rename)
 - To allow for easy file renaming in our gulp tasks.

### [gulp-streamify](https://github.com/nfroidure/gulp-streamify)
 - Quoting directly from nfroidure's github

 > Wrap old Gulp plugins to support streams.

### [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
 - Who doesn't love ugly js? Minifies js using [UglifyJS](https://github.com/mishoo/UglifyJS)

### [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream)
 - The easiest way to put it is this fine quote by [Eloy](http://stackoverflow.com/a/30851219) 

 > Basically you can say that vinyl-source-stream convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get.
 
 In other words browserify returns a regular readable stream, as do most npm modules. What **vinyl-source-stream** does is convert it to a vinyl stream for usage with gulp.

### [watchify](https://github.com/substack/watchify)
 - During development builds we really want to avoid browserifying our entire .js sources every time some change ocurrs, wacthify allows us to watch changes to our .js sources and then browserifying them on the fly.

### [gulp-cleanhtml](https://github.com/hemanth/gulp-cleanhtml)
 - Cleans comments and whitespace from your html files.

### [gulp-jshint](https://github.com/spalger/gulp-jshint)
 - Some javascript lint for our debug task.

### [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
 - Make our lint output easier on the eye.

### [gulp-util](https://github.com/gulpjs/gulp-util)
 - Used for stylish gulp task logging and replacing file extensions.

### [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
 - Hepls us handling errors;

# Project structure

|   .gitignore
|   gulpfile.js
|   install_nodemodules.bat
|   install_nodemodules.sh
|   package.json
|   reactproject.sublime-project
|   reactproject.sublime-workspace
|   readme.md
|   setup_newproject.bat
|   todo.txt
|   tree.txt
|   uninstall_nodemodules.bat
|   
+---dist
|   +---build
|   |   |   index.html
|   |   |   
|   |   +---css
|   |   |       build.min.css
|   |   |       
|   |   \---js
|   |           build.min.js
|   |           
|   \---debug
|       |   index.html
|       |   
|       +---css
|       |       main.css
|       |       
|       \---js
|               build.js
|               
\---src
    |   index.html
    |   
    +---css
    |       main.css
    |       
    \---js
            App.js
            Child.js
            Parent.js

# Requirements
 
To use this project you will need **node.js**, **npm** and prefereably **gulp** installed globally.

# Setup

1. Clone the project. *duh*

2. If you are creating a new project, delete package.json and run "npm init" on the project's root folder. Alternatively you can run "setup_newproject.bat"/"setup_newproject.sh" and skip step 2 and 3.
 
3. Run install_nodemodules.bat/.sh. If there are errors you could try installing the modules manually.

### //WARNING//
These scripts forcefully install the latest version of modules, this might break your app
in production, consider updating manually in production after testing in dev.

# NPM packages

npm install --global gulp@*
 
npm install --save-dev gulp@*
 
npm install --save-dev gulp-util@*
 
npm install --save-dev gulp-uglify@*
 
npm install --save-dev gulp-react@*
 
npm install --save-dev gulp-html-replace@*
 
npm install --save-dev vinyl-source-stream@*
 
npm install --save-dev browserify@*
 
npm install --save-dev watchify@*
 
npm install --save-dev reactify@*
 
npm install --save-dev gulp-streamify@*
 
npm install --save-dev gulp-minify-css@*
 
npm install --save-dev gulp-rename@*
 
npm install --save-dev gulp-cleanhtml@*
 
npm install --save-dev gulp-jshint@*
 
npm install --save-dev jshint-stylish@*
 
npm install --save-dev gulp-plumber@*


# Developing

- Run '"gulp dev" to start the dev task that watches changes to files and updates them in the debug directory.

- Run '"gulp prod"' to start the dev task that builds the project.

# Running the project
 
1. Build the project using '"gulp prod"'.
 
2. Find the built version in '/dist/build', open **index.html** and marvel at your work. Or not.