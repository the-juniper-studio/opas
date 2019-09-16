require('dotenv').config()
const fetch = require('node-fetch')
const { CREDAS_TOKEN } = process.env

exports.handler = async event => {
  console.log(`event body is killing me ${event.body}`)

  return fetch('https://pi-api.credas.co.uk/api/registrations', {
    method: 'POST',
    headers: {
      apikey: `${CREDAS_TOKEN}`,
    },
    body: event.body
  })
    .then(response => response.json())
    .then(data => {
      console.log(`END`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}