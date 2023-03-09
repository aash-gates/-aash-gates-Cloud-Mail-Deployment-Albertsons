# Basic Contact Form with Javascript

A Pen created on CodePen.io. Original URL: [https://codepen.io/aash-gates/pen/JjaObXR](https://codepen.io/aash-gates/pen/JjaObXR).

# Javascript Part

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

