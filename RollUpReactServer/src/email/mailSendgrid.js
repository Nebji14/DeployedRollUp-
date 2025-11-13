const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Confirmation d'email
const sendConfirmationEmail = async (mail, token) => {
  const mailOptions = {
    from: process.env.SENDGRID_SENDER,
    to: mail,
    subject: "Confirmation d'inscription",
    html: `<p>Bienvenue sur notre application RollUp! </p>
    <br/>
    <p>Cliquez sur le lien suivant pour confirmer votre email et poursuivre l'inscription : 
    <a href="${
      process.env.MODE === "development"
        ? process.env.SENDGRID_API_KEY
        : process.env.DEPLOY_BACK_URL
    }/auth/verifyMail/${token}" style="color: #6C63FF; font-weight: bold;">
    Poursuivre l'inscription</a></p>
    <br/>
    <p>Ce lien est valable <span style="font-weight: bold;">15 minutes </span>, au delà de ce temps vous devrez recommencer le processus d'inscription. </p>
    <br/>
    <p>L’équipe RollUp!</p>`,
  };

  try {
    await sgMail.send(mailOptions);
    console.log("✅ Mail envoyé à ", mail);
  } catch (error) {
    console.error("❌ Erreur envoi email:", error);

    if (error.response) {
      console.error(error.response.body); // détails de SendGrid
    }
  }
};
