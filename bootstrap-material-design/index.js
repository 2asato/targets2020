var express = require('express'),
    app = express(),
    mongoose = require('mongoose');


    mongoose.connect('mongodb://localhost/targets2020', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


    app.get('/', function(req, res){
        res.render('index.ejs')
    })

    // Tell Express to listen for requests (start server)
app.listen(8000, function(){
    console.log('Out On Keto server has started on port 8000');
})
