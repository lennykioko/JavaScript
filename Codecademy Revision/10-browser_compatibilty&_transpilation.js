/*
 Ecma International, the organization responsible for standardizing JavaScript, released a new version of
 it in 2015, called ECMAScript2015, commonly referred to as ES6. Note, the 6 refers to the version of
 JavaScript and is not related to the year it was released (the previous version was ES5).

caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features.
use it to look up ES6 feature support.
Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), 
to an older version (ES5) that is recognized by most modern browsers.

Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript
library called Babel that transpiles ES6 JavaScript to ES5.

Transpilation is the process of converting one programming language to another.
*/

// npm install babel-cli -D
// npm install babel-preset-env -D
// npm run build

/*
The first step is to place your ES6 JavaScript file in a directory called src. From your root directory,
the path to the ES6 file is ./src/main.js


Before we install Babel, we need to setup our project to use the node package manager (npm).
Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript
code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.

Before we can add Babel to our project directory, we need to run npm init. The npm init
command creates a package.json file in the root directory.

A package.json file contains information about the current JavaScript project.
Some of this information includes:

Metadata — This includes a project title, description, authors, and more.
A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

npm adds the package.json file to the same level as the src directory.

The install command creates a folder called node_modules and copies the package files to it.
The install command also installs all of the dependencies for the given package.

We install Babel with the following two commands:
$ npm install babel-cli -D
$ npm install babel-preset-env -D

The -D flag instructs npm to add each package to a property called devDependencies in package.json.
Once the project's dependencies are listed in devDependencies, other developers can run your project without
installing each package separately. Instead, they can simply run npm install — it instructs npm to look
inside package.json and download all of the packages listed in devDependencies.


next, you need to specify the version of the source JavaScript code.
You can specify the initial JavaScript version inside of a file named .babelrc.
In your root directory, you can run touch .babelrc to create this file.

Your project directory contains the following folders and files:

project
|_ node_modules
|___ .bin
|___ ... (100+ nodel modules already installed)
|_ src
|___ main.js
|_ .babelrc

Inside .babelrc you need to define the preset for your source JavaScript file.
The preset specifies the version of your initial JavaScript file.
Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5.
From this point on, we will refer to our source code as ES6+,
because Ecma introduces new syntax with each new version of JavaScript.
To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object(dict)
into .babelrc:

{
  "presets": ["env"]
}

When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file.
In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.



We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.
Inside of the package.json file, there is a property named "scripts" that holds an
object for specifying command line shortcuts. It looks like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...
In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let's consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.
src — Instructs Babel to transpile all JavaScript code inside the src directory. -d — Instructs Babel
to write the transpiled code to a directory.
lib — Babel writes the transpiled code to a directory called lib.

In package.json, add a script called "build".
When run, the "build" script should use Babel to transpile JavaScript code inside of the src folder
and write it to a folder called lib.
Don't forget to add a comma after the "test" script.



We're ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"
Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

From the command line, we type:

npm run build
The command above runs the build script in package.json.

Babel writes the ES5 code to a file named main.js (it's always the same name as the original file),
inside of a folder called lib.

The npm run build command will transpile all JavaScript files inside of the src folder.
This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files,
you only need to run one command (npm run build) to transpile all of your code.

*/


/*
For future reference, here is a list of the steps needed to set up a project for transpilation:

Initialize your project using npm init and create a directory called src
Install babel dependencies by running
npm install babel-cli -D
npm install babel-preset-env -D
Create a .babelrc file inside your project and add the following code inside it:
{
  "presets": ["env"]
}
Add the following script to your scripts object in package.json:
"build": "babel src -d lib"
Run npm run build whenever you want to transpile your code from your src to lib directories.

*/