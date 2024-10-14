// Code template taken from: https://firebase.google.com/docs/functions/get-started?_gl=1*1kuhuyd*_up*MQ..*_ga*MTIzNzIzOTk2NC4xNzI4OTM4Mzg5*_ga_CW55HF8NVT*MTcyODkzODM4OC4xLjAuMTcyODkzODM4OC4wLjAuMA..&gen=2nd
// twilio lib docs: https://www.npmjs.com/package/twilio

const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const { defineSecret } = require('firebase-functions/params');

const {initializeApp} = require("firebase-admin/app");

initializeApp();
const twilio_account_sid = defineSecret('twilio_account_sid');
const twilio_auth_token = defineSecret('twilio_auth_token');


exports.sendmessage = onRequest(
    { secrets: [twilio_account_sid,twilio_auth_token] },
    async (req, res) => {    
    const text = req.query.text;
    const client = require('twilio')(twilio_account_sid.value(), twilio_auth_token.value());
    await client.messages
    .create({
        from: 'whatsapp:+123456789',
        body:'Hello from Twilio. Your text is: ' + text,
        to: 'whatsapp:+1234567890'
    });
    res.json({result: `Message sent.`});
})

