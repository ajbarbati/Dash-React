const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3030
const path = require('path')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

const Users = require('./routes/Users')

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dash-react/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.use('/users', Users)

app.listen(port, function() {
    console.log("Server is running on port: " + port )
})


