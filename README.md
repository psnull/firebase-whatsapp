# firebase-whatsapp
Sends WhatsApp message through Twilio using Firebase Functions.

Requires Secrets Manager API to be enabled.


# How to test with Twilio's Whatsapp Sandbox

Twilio provides a test number to help set up and debug WhatsApp notifications.
To deploy a Cloud Function that sends a message, do the following
1. Create a Twilio Account and get the Account SID and Auth Token
2. Go to https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn to enable and test the Sandbox WhatsApp sender environment.
3. Change the sender number to the one in Twilio's dashboard, and the receiver number to yours.
4. Deploy this function to your FireBase account using `firebase deploy --only functions` . When prompted for Twilio secrets, pass them in.
5. Invoke the function using the `text` path param.

You can also run this in emulator mode using `firebase emulators:start `


