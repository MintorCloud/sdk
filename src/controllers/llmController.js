const llmService = require("../services/llmService")

exports.listModels = (req, res) => {
  res.json(llmService.getModels())
}

exports.distributeModel = (req, res) => {
  const result = llmService.distribute(req.body)

  res.json({
    message: "Model distributed",
    result
  })
}
