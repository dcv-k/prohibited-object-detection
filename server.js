const express = require("express")
const cors = require("cors")
const app = express()

app.listen(3000, () => {

})

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<h1>why r u gae</h1>')
})

app.post('/login', (req, res) => {
    res.send({"msg": "1"})
})