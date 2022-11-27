const compression = require("compression")
const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, "..", "www", "public")

app.use(compression())
app.use(express.static(publicPath))

app.get("*", (_, res) => {
    res.sendFile(publicPath + "/index.html")
})

app.listen(port, () => {
    console.log("Server is running!")
})