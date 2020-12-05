const express= require('express');
const app = express();

app.get('/courses',(req, res) => {
     res.status(200).json({name:'api testing'});
});


app.get('/courset',(req, res) => {
    let name = req.query.name;
    let id = req.query.id;
    res.json({id:id,name:name});
    
});

app.get('/course/:id',(req, res) => {
    let id =req.params.id;
    let name =req.params.name;
    
    res.json({id:id,name:name});
    
});


module.exports = app;