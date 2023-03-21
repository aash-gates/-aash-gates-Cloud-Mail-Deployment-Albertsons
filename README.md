# SendGrid Email Sender

This is a simple Node.js application that sends an email using the SendGrid API. It uses the @sendgrid/mail npm package to send the email.

## Prerequisites

To use this application, you will need:

    A SendGrid account and API key. You can sign up for a free account here.
    Node.js installed on your system.

## Installation

    Clone this repository to your local machine.
    Install the required packages by running npm install.
    Replace 'Your API Key Here' with your SendGrid API key in the sgMail.setApiKey() function call in index.js.
    Replace the to and from email addresses, subject, and text in the msg object to your desired values.
    Run the application using node index.js.

## Usage

When you run the application, it will send an email to the email address specified in the to property of the msg object. The email will be sent from the email address specified in the from property of the msg object.

After the email is sent successfully, a message will be logged to the console indicating that the email was sent successfully.

Note: If you are using a free SendGrid account, the email may be marked as spam or delivered to the recipient's junk folder due to security issues. Please check those folders if you do not receive the email in your inbox.

## License

This project is licensed under the MIT License.
