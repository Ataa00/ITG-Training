const underscore = require("underscore");

const math = require("lion-heart-math-english");

var result = math.add(9,1);

console.log(result);

//Core module, File or Folder, node_module

result = underscore.contains([1,2,3], 3);

console.log(result);

//We don't have to push node_module folder to our github repor. because it's huge size. so we create .gitignore file to prevent us to push that folder.
//To retrive node_modules folder we just write "npm i"
//The package.json file has all the dependances we need for our project.