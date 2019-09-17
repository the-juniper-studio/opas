require('dotenv').config()
const fetch = require('node-fetch')
const { CREDAS_TOKEN } = process.env

exports.handler = async (event, context, callback) => {
  let payload = JSON.parse(event.body).payload

  try {
    console.log("START SENDING")
    return fetch('https://postb.in/1568734216551-1112770559266', {
      method: 'POST',
      headers: {
        apikey: CREDAS_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
    })
    })
  } catch( err ) {
    console.log('ERRORED')
    console.log(err)
  }
}