Setup

1 - Clone the project.

2 - If you are creating a new project, delete package.json and run "npm init" on the project's root folder. Alternatively you can run "setup_newproject.bat"/"setup_newproject.sh" and skip step 2 and 3.
 
3 - Run npm install or npm update on the project's root folder. If there are errors with the modules, you could try installing the modules manually.

//WARNING//
These scripts forcefully install the latest version of modules, this might possibly break your app
in production, consider updating manually in production after testing in dev.

4 - Run "gulp dev" to start the dev task that watches changes to files and updates them in the debug directory.

5 - Run "gulp prod" to start the dev task that builds the project.