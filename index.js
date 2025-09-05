const express=require('express');
const app=express();
const staticRoute=require('./routes/staticroute');
const route=require('./routes/notes');
const {connectToMongoDB}=require('./connections');
const path=require('path')

const port=3000;

//Connection
connectToMongoDB('mongodb://127.0.0.1:27017/notesMaker');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use('/html', staticRoute);
app.use('/notes', route);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});