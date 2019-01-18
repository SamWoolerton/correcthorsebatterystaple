const express = require("express")
require("colors")
const app = express()
const port = 3000

app.use(express.static("dist"))

app.listen(port, () =>
  console.log(`Dev server running at localhost:${port}/index.html`.green)
)
