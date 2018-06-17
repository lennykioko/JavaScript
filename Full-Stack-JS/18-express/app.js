const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Chase after excellence and success will chase after you.</h1>");
});

app.listen(5000, () => {
    console.log("Express server running on port 5000");
});
