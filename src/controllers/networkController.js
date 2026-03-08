const depinService = require("../services/depinService")

exports.getNetworkStatus = (req, res) => {
  const status = depinService.getStatus()
  res.json(status)
}

exports.registerNode = (req, res) => {
  const node = depinService.registerNode(req.body)

  res.json({
    message: "Node registered",
    node
  })
}
