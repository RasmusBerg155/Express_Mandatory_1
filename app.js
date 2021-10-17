const express = require('express')
const app = express()

app.use(express.static("public"))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/index.html')
})

app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/public/memes/memes.html')
})



const PORT = process.env.PORT || 8080;

app.listen (PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port:", PORT)
})