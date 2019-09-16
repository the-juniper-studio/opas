require('dotenv').config()
const fetch = require('node-fetch')
const { CREDAS_TOKEN } = process.env

exports.handler = async (event, context, callback) => {
  let payload = JSON.parse(event.body).payload;
  return fetch('https://pi-api.credas.co.uk/api/registrations', {
    method: 'POST',
    headers: {
      apikey: CREDAS_TOKEN,
    },
    body: {
      forename: payload.data.forename,
      surname: payload.data.surname,
      phoneNumber: payload.data.phoneNumber,
      emailAddress: payload.data.emailAddress,
      regTypeId: "Cc466776a-9663-4812-8312-c5f00aa90796",
      referenceId: "HID/12345/336/10",
      sendEmail: true,
      diallingCode: "+44",
      duplicateAcknowledgement: false,
      provideWebJourneyLink: true,
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(payload.data.regTypeId)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}