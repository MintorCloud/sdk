const express = require("express")
const cors = require("cors")
require("dotenv").config()

const networkRoutes = require("./routes/networkRoutes")
const llmRoutes = require("./routes/llmRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    name: "Mintor",
    description: "DePIN for LLM distribution network"
  })
})

app.use("/network", networkRoutes)
app.use("/llm", llmRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Mintor node running on port ${PORT}`)
})
