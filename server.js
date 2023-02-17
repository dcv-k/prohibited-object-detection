const express = require("express")
const cors = require("cors")
const app = express()

app.listen(3000, () => {

})

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send({"msg": "1"})
})