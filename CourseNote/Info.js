//npm init -y at start in every node files to download modules   (-y fill all field by default)

/* ------------------------------- FileSystem ------------------------------- */
//#region 

//Importing FileSystem Module
//const fs = require('fs')

//Open notes.txt overwriting data
//fs.writeFileSync('notes.txt', 'This is js!\n')

//append notes.txt leaving data inside
//fs.appendFileSync('notes.txt', 'THE MESSAGE\n')

//#endregion

/* ----------------------------- Importing Files ---------------------------- */
//#region 

//import a function from a js script
//const Add = require('./utils.js')

//using function to assign a value to variable
//const sum = Add(4, -2)

//using the function in the console
//console.log(Add(3, 4))

//using the variable to get function value
//console.log(sum)

/* -------------------------------------------------------------------------- */
/*                                //challenge#2                               */
/* -------------------------------------------------------------------------- */

// const thenote = require('./notes.js')
// console.log(thenote)

/* --------------------- //challenge#2  ->in other file --------------------- */

// const note = function () {
//     return "Your Notes"
// }
// module.exports = note()
/* -------------------------------------------------------------------------- */

//#endregion

/* ---------------------- Npm module + using npm module --------------------- */
//#region 

/* -------------------------------------------------------------------------- */
/*                                  validator                                 */
/* -------------------------------------------------------------------------- */

//export library from npmjs.com =>doesnt require ./ in require()
//const validator = require('validator')


//basic function of validator
//console.log(validator.isURL('https://mead.io'))


/* -------------------------------------------------------------------------- */
/*                                    Chalk                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------- challenge #3 >>chalk<< ------------------------- */

//npm install chalk@2.4.1   -> @ decide version to install, default will be latest

//const chalk = require('chalk')
//console.log(chalk.green.bgRed.bold.inverse('Success!'))
/* -------------------------------------------------------------------------- */

//#endregion

/* -------- Global npm packages and nodemon (not local dependencies) -------- */
//#region 

/* -------------------------------------------------------------------------- */
/*                                Global module                               */
/* -------------------------------------------------------------------------- */

//npm install -g nodemon    --->(-g stand for global)
//nodemon rerun node app.js on save

//console.log(chalk.red('hello')

//#endregion

/* ---------------------- File system and command line ---------------------- */
//#region 

/* ------------------------- Getting input from use ------------------------- */
//#region 

//const command = process.argv[2]
//[2] is the first input we provided --->console.log(process.argv)
// if (command === "add") {
//   console.log("adding note")
// }
// if (command === "remove") {
//   console.log("removing note")
// }
//console.log(process.argv)

//#endregion

/* ----------------------- Argument Parsing with yargs ---------------------- */
//#region 
// const yargs = require('yargs')
// const chalk = require('Chalk')
// const note = require('./notes.js')
// //customize yargs version
// yargs.version('15.1.0')

// //create add, remove, read, list command
// //create add command
// yargs.command({
//     command: 'add',
//     describe: 'add a note',
//     builder: {
//         //option you can use with ---> node app.js add --title="Shopping list"  
//         //default value is true if no string  
//         title: {
//             describe: 'Note Title',
//             //demandOption:true (required) ---demandOption:false (not required)
//             demandOption: true,
//             //demand a specific type of value
//             type: 'string'
//         },
//         body: {
//             describe: 'Note Body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         //argv  --->not necessary but can be added  --->used to give options on builder
//         note
//     }
// })
// //create remove 
// yargs.command({
//     command: 'remove',
//     describe: 'remove a note',

//     handler: function () {

//         console.log('removing a note')
//     }
// })
// //create list 
// yargs.command({
//     command: 'list',
//     describe: 'list notes',
//     handler: function () {
//         console.log('listing notes')
//     }
// })
// //create read 
// yargs.command({
//     command: 'read',
//     describe: 'reading a note',
//     handler: function () {
//         console.log('reading note')
//     }
// })

//#endregion

/* ------------------------------ Async Program ----------------------------- */
//#region 
// console.log('starting')

// setTimeout(() => {
//     console.log('2second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0second timer')
// }, 0)
// console.log('stopping')

//Print
// starting
// stopping
// 0second timer
// 2second timer

//#endregion