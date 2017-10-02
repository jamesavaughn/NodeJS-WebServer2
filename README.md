# NodeJS-WebServer

## Description ##

Web server Example with Basic Website

## Functionality: ##

 1. Opens localhost port 3000
 2. Basic website to navigate folder directory

## Run instructions: ##

` $ npm install `
` $ npm start `
` Open browser to localhost:3000`

## Key topics and functions: ##

* Middleware (hbs e.g. Handlebars)
* Templates and Partials - dynamic website
* Helpers
* Heroku integration
 // (1) set port variable
 `const port = process.env.PORT || 3000;`
 // (2) set environment variable for Heroku
`app.listen(port, () => {console.log('server is up on port ${port}');});`
// (3) set start script in package.json
`    "start": "node server.js"`

## Development process ##
- set up local dev environment
- plan your project
- code locally
- test locally
- commit to git
- push to heroku `git push heroku`
 

