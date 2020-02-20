/* --------------------------------- Modules -------------------------------- */
//#region 
const fs = require('fs')
const chalk = require('chalk')
//#endregion

/* -------------------------------- loadNotes ------------------------------- */
//#region 
const loadNotes = () => {
    //Recover the data from json File
    try {
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //if file doesn't exist, return an empty array
        return []
    }

}
//#endregion

/* -------------------------------- saveNotes ------------------------------- */
//#region 
const saveNotes = (notes) => {
    //save the new added note at the end of the json file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Notes.json', dataJSON)
}
//#endregion

/* --------------------------------- addNote -------------------------------- */
//#region 
const addNote = (Title, Body) => {
    //get the notes in json file
    const notes = loadNotes()

    //filter if there is duplicate before adding new note (filter return an array)
    /* ---------------------- 2 ways to make filter method ---------------------- */
    const duplicateNotes = notes.filter((note) => note.title === Title)
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === Title
    // })

    //using find instead of filter to prevent going through all files if you find a duplicate
    const duplicateNote = notes.find((note) => note.title === Title)

    //Push can only be used on array
    //use the array length to check if there is duplicate (0===no duplicate)

    //if (duplicateNotes.length === 0) { --->with filter
    if (!duplicateNote) {             // --->with find               
        notes.push({
            title: Title,
            body: Body
        })
        //if there is no duplicate save the new note at the end of json file
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }
    else {
        console.log(chalk.red('The new note is a duplicate!'))
    }
}
//#endregion

/* ------------------------------- removeNote ------------------------------- */
//#region 
const removeNote = (Title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != Title)
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green(Title + ' was removed!'))
    }
    else {
        console.log(chalk.red('This note does not exist!'))
    }
}
//#endregion

/* -------------------------------- listNote -------------------------------- */
//#region 
const listNote = () => {
    //Load JSON file
    const notes = loadNotes()
    //Header
    console.log(chalk.blue('Your Notes'))
    //print the notes title
    notes.forEach((note) => console.log(note.title))
}
//#endregion

/* -------------------------------- readNote -------------------------------- */
//#region 
const readNote = (Title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === Title)

    if (foundNote) {
        console.log(chalk.yellow(foundNote.title))
        console.log(foundNote.body)
    }
    else {
        console.log(chalk.red('This note does not exist!'))
    }
}
//#endregion

/* ----------------------------- module.exports ----------------------------- */
//#region 
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}
//#endregion