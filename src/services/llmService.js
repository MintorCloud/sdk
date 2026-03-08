let models = [
  { name: "Mintor-LLM-1", size: "7B" },
  { name: "Mintor-LLM-2", size: "13B" }
]

exports.getModels = () => {
  return models
}

exports.distribute = (data) => {
  return {
    model: data.model,
    targetNode: data.node
  }
}
