# React Project BoilerPlate

## Do you need...
**Minified** css and js? **Ugliefied** js? **Transpiled** jsx? Separate debug and release folders?
A folder structure that kind of makes sense? **Browserified** js? On the fly browserfication?
Install scripts for the 11 npm modules required?
 
Use this boilerplate project.
 
## Do you also want...
Auto generated **JSlint**? Auto updating files in your browser during development?
 
Well... those are coming soon™


# Setup

1. Clone the project. *duh*

2. If you are creating a new project, delete package.json and run "npm init" on the project's root folder. Alternatively you can run "setup_newproject.bat"/"setup_newproject.sh" and skip step 2 and 3.
 
3. Run install_nodemodules.bat/.sh. If there are errors you could try installing the modules manually.

## //WARNING//
These scripts forcefully install the latest version of modules, this might break your app
in production, consider updating manually in production after testing in dev.

# Developing

- Run '"gulp dev" to start the dev task that watches changes to files and updates them in the debug directory.

- Run '"gulp prod"' to start the dev task that builds the project.

# Running the project
 
1. Build the project using '"gulp prod"'.
 
2. Find the built version in '/dist/build', open **index.html** and marvel at your work. Or not.