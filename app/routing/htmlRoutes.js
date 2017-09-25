var path = require("path");
// Export the paths for the server
module.exports = function(app) {
    // Get the survey html page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // Get the home html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}