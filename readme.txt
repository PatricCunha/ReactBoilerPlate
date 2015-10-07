http://browserify.org/#install
https://github.com/andreypopp/reactify
https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html
https://github.com/BinaryMuse/chrome-fast-tab-switcher/tree/v1.0.1/scripts

//React templates in simmilar to angular templates.
http://wix.github.io/react-templates/

Following:
http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/
for workflow creation

Create a project folder with the following structure, "js" and "css" folder's file names may differ

gulpfile.js // our gulp workflow will be coded here
	src
		index.html
		js
			App.js
			Child.js
			Parent.js
		css
			style.cs

Run this in the node console in the project folder

npm init //auto creates required files, necessary to accept modules
		 //creates modules folder etc.

npm install --global gulp
npm install --save-dev gulp;
npm install --save-dev gulp-uglify;
npm install --save-dev gulp-react;
npm install --save-dev gulp-html-replace;
npm install --save-dev vinyl-source-stream;
npm install --save-dev browserify;
npm install --save-dev watchify;
npm install --save-dev reactify;
npm install --save-dev gulp-streamify;
npm install --save-dev gulp-cssmin;

