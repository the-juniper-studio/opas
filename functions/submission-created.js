require('dotenv').config()
const fetch = require('node-fetch')
const { CREDAS_TOKEN } = process.env

exports.handler = async (event, context, callback) => {
  let payload = JSON.parse(event.body).payload

  try {
    console.log("START SENDING")
    return fetch('https://postb.in/1568734216551-1112770559266', {
      method: 'POST',
      body: 'HELLO'
    })
  } catch( err ) {
    console.log('ERRORED')
    console.log(err)
  }
}