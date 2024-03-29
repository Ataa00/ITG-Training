# ITG-Training

# Folder Description:

Solve Task-2.

# Task 2 – Part 2 (ES6JS Modules):
---

## Task Description:

- Initialize a new project.
- Create four modules for a Calculator app. Each module performs an arithmetic operation on two integer or float numbers and returns the result for each operation. The float result should be formatted to return always two precisions.
- Create an entry point for the project that calls the above four modules one by one and prints the result.
- Provide the NodeJS and NPM commands used for the first and third points.

## Approach:
- First, I created a new branch called Task-ES6JS to push my practice work on it.  
  Using the following command:
  ```
  git checkout -b Task-ES6JS
  ```
- Secondly, created a new folder called it ES6JS.
- Inside that folder, I initialized the Node project using the following command:
  ```
  npm init
  ```
- After that, I created four modules for a Calculator app. Each module performs an arithmetic operation on two integer or float numbers and returns the result for each operation.
- Then, I created An app.js file and called these four modules on it using:
```
import functionName from "./math-lib/operationName.js";
```
- Finally, I run the code using the following command:
```
node app.js
```
Note:  
I used index.html to preview a simple calculater to let the user entering the wanted inputs and show the rsult.