const express = require("express")
const router = express.Router()

const {
  getNetworkStatus,
  registerNode
} = require("../controllers/networkController")

router.get("/status", getNetworkStatus)
router.post("/register", registerNode)

module.exports = router
