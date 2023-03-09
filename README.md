# Basic Contact Form with Javascript

A Pen created on CodePen.io. Original URL: [https://codepen.io/aash-gates/pen/JjaObXR](https://codepen.io/aash-gates/pen/JjaObXR).

## Tech About the Web Page
## Landing Page (index.html)

This Site was generated using the Mobirise Web-Developer

## Contact Us Page
This is an HTML file that contains a form for submitting messages to a team of developers. It uses the Tailwind CSS library for styling.

The file starts with some meta tags for defining the character set, viewport, and social media metadata. Then it includes the Tailwind CSS stylesheet from a CDN.

The body of the HTML file consists of a div with a class of "flex items-center min-h-screen bg-gray-50 dark:bg-gray-900" which sets the background color of the page. Inside this div, there is another div with classes for centering the content on the page and setting the maximum width. This div contains a form for submitting messages.

The form has some hidden input fields for setting the access key and subject of the message. It also includes input fields for the user's name, email address, phone number, and message. The form uses the Web3Forms API to submit the message when the user clicks the "Send Message" button.

Finally, there is a script tag at the bottom of the HTML file that includes a JavaScript file called "script.js". It's not clear what this JavaScript file does without seeing its contents.

## Javascript Part

This code is written in JavaScript and is used to handle form submission using the fetch API. Here's what it does:

It selects the HTML elements "form" and "result" using the document.getElementById() method and assigns them to variables "form" and "result" respectively.

It attaches an event listener to the "form" element using the addEventListener() method with the "submit" event and a function to execute when the event is triggered.

Inside the event listener function, it creates a new instance of the FormData object and passes the "form" element as an argument to it.

It prevents the default form submission behavior using the preventDefault() method.

It creates an empty object called "object" and loops through each entry in the FormData object using the forEach() method. For each entry, it assigns the key-value pair to the "object" variable.

It then converts the "object" variable to a JSON string using the JSON.stringify() method and assigns it to a variable called "json".

It updates the "result" element's HTML content to "Please wait..." using the innerHTML property.

It sends a POST request to the Web3Forms API endpoint "https://api.web3forms.com/submit" using the fetch() method. It includes the "json" variable in the request body, sets the "Content-Type" and "Accept" headers to "application/json", and includes an API key in the "x-api-key" header.

It checks the response status and updates the "result" element's HTML content and CSS class accordingly.

It catches any errors that occur during the fetch request and updates the "result" element's HTML content to "Something went wrong!".

It resets the "form" element using the reset() method and hides the "result" element after a 5-second delay using the setTimeout() method.

Overall, this code sends form data to the Web3Forms API endpoint and displays a success or error message based on the API response.

