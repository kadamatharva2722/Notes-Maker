const express=require('express');
const {noteModel}=require('../models/note');
const route=express.Router();

route.get('/homepage', async(req,res)=>{
    const allNotea= await noteModel.find({});
    return res.render('home', {
        allNotes:allNotea,
    });
})

module.exports=route;
