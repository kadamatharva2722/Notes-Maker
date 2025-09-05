const express = require('express');
const { noteModel } = require('../models/note');

async function handleAddNotes(req, res) {

    const notebody = req.body;

    if (!notebody.title || !notebody.createdBy)
        return res.status(400).send("Invalid Input");

    const createdNote = await noteModel.create({
        title: notebody.title,
        createdBy: notebody.createdBy,
        description: notebody.description,
    });
    const allNote = await noteModel.find({})
    return res.render('home', {
        allNotes: allNote
    });
}

async function handleDeleteNote(req, res) {

    const noteTitle = req.params.title;

    await noteModel.findOneAndDelete({ title: noteTitle });

    const allNote = await noteModel.find({});

    res.render('home', {
        allNotes: allNote
    })
}

async function handleUpdateNote(req, res) {
    if(!req.body)
        res.end("Input not provided");

    const { title, createdBy, description } = req.body;

    await noteModel.findByIdAndUpdate({_id:req.params.id}, {
        title:title, createdBy:createdBy, description:description
    });

    const allNote = await noteModel.find({});
    res.render('home',
        { allNotes: allNote }
    )
}

module.exports = {
    handleAddNotes,
    handleDeleteNote,
    handleUpdateNote
}
