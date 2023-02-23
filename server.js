const express = require("express")
const cors = require("cors")
const { connection } = require("./db-connection")
const app = express()

app.use(express.json());

app.listen(3000, () => {
    if (connection) {
        console.log("connection made")
    }
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    
})

app.post('/login', (req, res) => {
    console.log(req.body.username, req.body.password)
    connection.execute("SELECT * FROM users WHERE username = ? AND password = ?",
                        [req.body.username, req.body.password],
                        (err, results, fields) => {
                            if (results[0])
                                res.send({"idUsers": results[0].idUsers})  
                        })
})