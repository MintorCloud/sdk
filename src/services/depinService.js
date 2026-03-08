let nodes = []

exports.getStatus = () => {
  return {
    network: "Mintor",
    nodes: nodes.length
  }
}

exports.registerNode = (node) => {
  nodes.push(node)
  return node
}
