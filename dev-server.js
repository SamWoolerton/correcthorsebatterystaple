const express = require("express")
require("colors")
const opn = require("opn")
const app = express()

const port = 3000
const url = `http://localhost:${port}`

app.use(express.static("dist"))

app.listen(port, () => console.log(`Dev server running at ${url}`.green))

opn(url)
