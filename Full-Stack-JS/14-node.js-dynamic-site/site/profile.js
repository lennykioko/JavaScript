const EventEmitter = require("events").EventEmitter;
const https = require("https");
const http = require("http");
const util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */

const Profile = (username) => {
    EventEmitter.call(this);
    profileEmitter = this;
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = "";

        if (response.statusCode !== 200) {
            request.abort();
            const message = `There was an error getting profile for ${username}. (${http.STATUS_CODES[response.statusCode]})`;
            const statusCodeError = new Error(message);
            profileEmitter.emit(statusCodeError);
        }

        response.on('data', chunk => {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', () => {
            if(response.statusCode === 200) {
                try {
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits(Profile, EventEmitter);

module.exports = Profile;