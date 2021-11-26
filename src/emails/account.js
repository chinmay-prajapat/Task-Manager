const sgMail = require("@sendgrid/mail")
const sengridAPIkey =
  "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"
sgMail.setApiKey(sengridAPIkey)
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: `${email}`,
    from: "prajapatchinmay@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app,${name}. Let me know how you get along with the app.`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  })
}
module.exports = { sendWelcomeEmail }
