var express = require("express"),
    ejs = require("ejs"),
    path = require("path"),
    app = express();
app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("ampbeats");
});


app.listen(process.env.PORT || 5000, process.env.IP, function () {
    console.log("Server started...");
});
