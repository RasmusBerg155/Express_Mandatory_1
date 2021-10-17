/* 
We are using the express library for this project
It makes it way easier to make small(and big)  projects to come up and running real fast
For this project we've also installed the packed nodemon which is included in package.json under scripts
nodemon makes it possible to run our app continously while editing it
To run the app we type "npm run dev-start" which will run the script 
*/


// First of we need to require or express library
const express = require('express')
// to set up our server we can create our app and call the express function
const app = express()


app.use(express.static('public'))

/* 
with "app." we will be able to call different methods including all the http request including:
get, post, put, delete, patch which are the main ones used
inside the get we have to pass the path which in this case is simply the root path "/"
the second one is a function taking 3 different parameters: request, respond and next
next is rarely used so its not included here.
Inside this function we can include our code, in our case we need to send something along
with our responds aka "res", here we send a file back which is out html file. 
but we can also send json, status codes and more...
*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/index.html')
})

app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/public/memes/memes.html')
})

app.get('/kekw', (req, res) => {
    res.sendFile(__dirname + '/public/rickroll/rickroll.html')
})


// To make our app run on a port in the end we need to first up identify our port
// Then use app.listen to listen for any request or responds from the server
const PORT = process.env.PORT || 8080;

// inside our app.listen we include an error handling and a console log to ourselves,
// letting us know the server is running on port 8080
app.listen (PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port:", PORT)
})