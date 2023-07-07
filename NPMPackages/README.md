# ITG-Training

## Task2-Part2-NPM Packages

### Task Description  
- Create an app that takes a specific time zone (such as Asia/Hebron) and provides the current time based on the time zone specified.
- The app should have an entry point and another file(s) to contain the modules.
- The modules type should be ECMAScript.

## Aproach

### Tools used in this task  
- NodeJS + Express for the back-end.
- HTML + CSS for the front-end.

### Initialize Project  
- Used the following to initialize node project:
  ```
  npm init
  ```
-  Configure Node to run ES6JS using Babel:
  ```
  npm i @babel/cli @babel/core @babel/node @babel/preset-env
  ```
- Create a new file named ".babelrc"
- Added this configuration in it:  
  ```
  {
    "presets": [
        "@babel/env"
    ]
  } 
  ```
- To run ES6JS:  
  ```nodemon --exec babel-node src/index.js ```
