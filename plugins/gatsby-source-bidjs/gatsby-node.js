const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Helper function that processes a photo to match Gatsby's node structure
  const processAuctionItem = auctionItem => {
    const nodeId = createNodeId(`auction-item-${auctionItem.id}`)
    const nodeContent = JSON.stringify(auctionItem)
    const nodeData = Object.assign({}, auctionItem, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `BidJS`,
        content: nodeContent,
        contentDigest: createContentDigest(auctionItem),
      },
    })
    return nodeData
  }


  // Convert the options object into a query string
  // const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the BidJs API URL
  const apiUrl = `https://hove.eu-west-2.bidjs.com/auction-mgt/bdxapi/reporting/auction/${configOptions.auctionId}/${configOptions.sorting}?clientId=${configOptions.clientId}&includeImages=${configOptions.includeImages}`
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl, { 
      method: 'get', 
      headers: new Headers({
        'bdxapi_name': configOptions.bdxapi_name,
      })
    })
    // Parse the response as JSON
    .then(response => response.json())
    // Process the JSON data into a node
    .then(data => {
      // For each query result (or 'hit')
      data.models.auctionReport.items.forEach(auctionItem => {
        // Process the Item data to match the structure of a Gatsby node
        const biditemid = processAuctionItem(auctionItem.id)
        const nodeData = processAuctionItem(auctionItem)
        // Use Gatsby's createNode helper to create a node from the node data
        createNode(nodeData)
      })
    })
  )
}
