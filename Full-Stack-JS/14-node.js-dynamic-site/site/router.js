const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const querystring = require("querystring");
const commonHeaders = {'Content-Type': 'text/html'};


const home = (request, response) => {
    if(request.url === "/") {
        if(request.method.toLowerCase() === "get") {
            response.writeHead(200, commonHeaders);  
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        } else {
            request.on("data", function(postBody) {
                const query = querystring.parse(postBody.toString());
                response.writeHead(303, {"Location": "/" + query.username});
                response.end();
            });
        }
    }
}

const user = (request, response) => {
    const username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);
      
        const studentProfile = new Profile(username);
        studentProfile.on("end", profileJSON => {
      
            const values = {
                avatarUrl: profileJSON.gravatar_url, 
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }

            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        
        studentProfile.on("error", error => {
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });    
    }
}

module.exports.home = home;
module.exports.user = user;
