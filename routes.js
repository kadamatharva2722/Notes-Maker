const express=require('express');
const route=express.Router();
const {handleAddNotes, handleDeleteNote, handleUpdateNote}=require('../controller/notes');

route.post('/add', handleAddNotes);

route.post('/delete/:title', handleDeleteNote);

route.post('/update/:id', handleUpdateNote)

module.exports=route;
