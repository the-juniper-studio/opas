require('dotenv').config()
const fetch = require('node-fetch')
const { CREDAS_TOKEN } = process.env

exports.handler = async event => {
  const body = JSON.parse(event.body)
  console.log(`Body: ${body}`)

  return fetch('https://pi-api.credas.co.uk/api/registrations', {
    method: 'POST',
    headers: {
      apikey: `${CREDAS_TOKEN}`,
    },
    body: ({ body }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to CREDAS:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}