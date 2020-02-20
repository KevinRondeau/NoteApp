/* -------------------------------- Modules ---------------------------------- */
//#region 
const yargs = require('yargs')
const notes = require('./notes.js')


//#endregion

/* ---------------------------------- add ------------------------------------ */
//#region
yargs.command({
    command: 'add',
    describe: 'Add a note !',
    builder: {
        //option you can use with ---> node app.js add --title="Shopping list"  
        //default value is true if no string  
        title: {
            describe: 'Note Title',
            //demandOption:true (required) ---demandOption:false (not required)
            demandOption: true,
            //demand a specific type of value
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    //calling a handler when the function is used in command line (argv) --->passed arguments
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//#endregion

/* --------------------------------- remove ---------------------------------- */
//#region 
yargs.command({
    command: 'remove',
    describe: 'Remove a note !',
    builder: {
        title: {
            describe: 'title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {

        notes.removeNote(argv.title)
    }
})
//#endregion

/* ---------------------------------- list ----------------------------------- */
//#region
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNote()
    }
})
//#endregion

/* ---------------------------------- read ----------------------------------- */
//#region  
yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    builder: {
        title: {
            describe: 'title of the note you want to find',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
//#endregion

/* ------------------------------ yargs.parse() ----------------------------- */
//#region 
//important at the end else program wont know to execute yargs actions
yargs.parse()
//#endregion