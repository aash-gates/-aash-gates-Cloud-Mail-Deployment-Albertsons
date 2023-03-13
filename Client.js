// Sendinblue API key
const apiKey = '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';

// Sendinblue API endpoint
const endpoint = 'https://api.sendinblue.com/v3/smtp/email';

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set the request method and endpoint
xhr.open('POST', endpoint, true);

// Set the request headers
xhr.setRequestHeader('Accept', 'application/json');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('api-key', apiKey);

// Set the request payload
const payload = JSON.stringify({
    to: [{email: 'aashgates@Outlook.com'}],
    subject: 'Test email from Sendinblue',
    htmlContent: '<p>This is a test email sent using Sendinblue API.</p>',
    sender: {email: 'aashik.k@albertsons.in'}
});

// Send the request
xhr.send(payload);

// Handle the response
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log('Email sent successfully!');
    } else {
        console.error('Failed to send email. Error: ' + xhr.statusText);
    }
};