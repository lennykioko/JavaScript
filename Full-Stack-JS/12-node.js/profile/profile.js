"use strict";

const https = require('https');
const http = require('http'); // for the status code functionality
function printMessage (username, badgeCount, points) {
    const message = `${username} has ${badgeCount} badges and ${points} points in JavaScript.`;
    console.log(message);
}

function printError (error) {
    console.error(`Error: ${error.message}`);
}

function getProfile (username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            if (response.statusCode === 200) {
                let body = "";

                response.on("data", data => {
                    body += data.toString();
                });

                response.on("end", () => {
                    try {
                        const profile = JSON.parse(body);
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch(error) {
                        printError(error);
                    }  
                });
            } else {
                const message = `There was an error getting profile for ${username}. (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });

        request.on("error", printError);
    } catch(error) {
        printError(error);
    }
}


module.exports.getProfile = getProfile;