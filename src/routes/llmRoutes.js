const express = require("express")
const router = express.Router()

const {
  distributeModel,
  listModels
} = require("../controllers/llmController")

router.get("/models", listModels)
router.post("/distribute", distributeModel)

module.exports = router
