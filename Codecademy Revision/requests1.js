/*
There are numerous reasons why JavaScript is the preferred language of the web.
Amongst the most important reasons are JavaScript's non-blocking properties,
or that it is an asynchronous language.


The way JavaScript handles multiple requests is called its event loop.
Messages that will be sent to other websites containing code are added to a queue as certain events occur.
Each message is run completely before moving on to the next one,
which might cause the user to wait a long time between actions.
To prevent this, long messages are broken into smaller messages that are added to the queue when they are
ready to be run. In the case of requesting information from another site,
we separate the request (asking another website for information) from what we want to do with
the response (the information the website returns to us).
We can do this using a system of technologies called Asynchronous JavaScript and XML, or AJAX.


When AJAX was first formalized by the World Wide Web Consortium in 2006, it required the use
of an XMLHttpRequest object, a JavaScript object that is used to retrieve data.
There are several steps to creating an AJAX request using an XMLHttpRequest, or XHR, object.
refer to requests1.png
 */

// The jQuery library provides other methods that allow us to write fewer lines of code to
// accomplish the same goals.

$.get('https://api-to-call.com/endpoint', response => {console.log('hello world')}, 'json');

// $.get( opens the method call.
// 'https://api-to-call.com/endpoint' is the URL to which we're making our request.
// The second parameter, response => {...} is an arrow function.
// This is the success callback function. Between the curly braces, specify what to do with the response
// if it is successful, such as logging it to the console or appending it to the body of the HTML.
// The third parameter, 'json', is the response format.
// If the request you are making requires settings in addition to the parameters described above,
// the structure of the $.get() method is a bit different. Instead of passing separate arguments,
// you would pass a single settings object containing all of the arguments much like with the $.ajax()
// method. Then, you can omit the type property.

$.post('https://api-to-call.com/endpoint', {data}, response => {console.log('hello world')}, 'json');

// POST is similar to GET

// There are other helper methods that can reduce the amount of boilerplate code necessary.
// If you know, for example, that you want your data type to be JSON,
// you can use the $.getJSON() method in place of the $.get() method.

// Determining how to correctly write the requests and how to properly implement them requires
// carefully reading the documentation of the API with which you're working.