"use strict";

const weather = require("./weather");
// join multiple values passed as arguements and replace all spaces with underscores.
const query = process.argv.slice(2).join("_").replace(" ", "_");

// 90201
// Cleveland_OH
// London_England

weather.get(query);
