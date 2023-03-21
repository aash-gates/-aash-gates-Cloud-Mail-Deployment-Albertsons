const sgMail = require('@sendgrid/mail');


const msg = {
  to: 'aashgates@outlook.com',
  from: 'aashik.k@albertsons.in',
  subject: 'Test Email',
  text: 'Hello, this is a test email from Aash Javascript',
};

sgMail.send(msg)
  .then(() => {
    console.log('Hey The Email sent successfully! Due to Security issues and the Account being a Free Account Please Check the Spam or Junk Folder');
  })
  .catch((error) => {
    console.error(error);
  });
