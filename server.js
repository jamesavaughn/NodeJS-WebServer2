const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express(); //return results from calling Express

//set up handlebars to work with partials (partial website components)
hbs.registerPartials(__dirname + '/views/partials');

//set view engine to hbs
app.set('view engine', 'hbs');


//middleware function, next tell express when done
//call next() to complete the middleware loading
//middleware to track server
app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`) //log to screen
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append to server.log.')
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maint.hbs')
// });

//middleware for express object
//__dirname saves path to current directory
app.use(express.static(__dirname + '/public'));

//register helper
hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear()
});
//run javascript code from inside handlebars templates
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
//http route handlers
//two important arguments req and res
//res has a lot of methods to customize the responses
//set up a handler for routing, takes two arguments req and res
app.get('/', (req, res) => { 
    //respond to a request
    //res.send('<h1> Hello Express</h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to the website'
    });
});
//handler for about page
app.get('/about', (req, res) => {
    //render about.hbs page
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});
app.get('/bad', (req, res) =>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
//bind  to port on machine to listen 
//common port for developing locally
//need to stop using ctrl C
app.listen(3000, () => {
    console.log('server is up on port 3000');
}); 