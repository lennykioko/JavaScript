/*
Asynchronously requesting and responding to data is such an integral part of what developers do with
JavaScript that a new type of object, called a Promise, was added to JavaScript in ES6.

A Promise is an object that acts as a placeholder for data that has been requested but not yet received.
Eventually, a Promise will resolve to the value requested or to a reason why the request failed.

If the requested information or any error except a network error is received,
the Promise is fulfilled and calls a function to handle the response.
If there is a network error, the Promise is rejected and will call a function to handle the error.
*/

/*
On the first line, we call the fetch() function and pass it a single argument - the URL of the API endpoint.
Because this is a GET request, this URL will contain the URL to the API and may also contain query parameters,
an API key, a client ID, or other information necessary to make the request (depending on the API in question).

The fetch() function
creates a request object using the information provided to it
sends that request object to the URL provided
returns a Promise that ultimately resolves to a response object, which contains a lot of information,
including (if everything went well), the information requested.
Note: Because fetch() is a web API, not all browsers support it. To ensure that all users can run code
that uses fetch, we can add a polyfill that will be used if a user doesn't have fetch() support in their browser.


We chain a .then() method to the closing parentheses of the fetch() function.
This is where the asynchronicity of JavaScript comes in - the fetch() function makes the request
and returns the response, and we don't call the function that will handle the response until it has
been received.

.then() takes two callback functions as parameters, the first of which handles success and the
second of which handles failure.


The same requests that you've been writing by requesting the information with fetch() and chaining .then()
to take advantage of the asynchronous properties of JavaScript can be condensed using two new
function keywords introduced in ES7: async and await.

Because async / await is ES7, and therefore not yet supported by all browsers,
it's essential to ensure your code is transpiled, or converted, to an earlier version of JavaScript
if you're using them. A useful tool for transpilation is Babel.


Promises are a new type of JavaScript object that represent data that will eventually be
returned from a request.

fetch() is a web API that can be used to create requests. fetch() will return Promises.
We can chain .then() methods to handle Promises returned by fetch.

The .json() method converts a returned Promise to a JSON object.
async is a keyword that is used to create functions that will return Promises.
await is a keyword that is used to tell a program to continue moving through the message
queue while a Promise resolves.
await can only be used within functions declared with async.

*/

