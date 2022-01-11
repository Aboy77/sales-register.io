const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const expressSession = require("express-session")

const app = express();
require("./database")

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "src", "views"));
app.engine(".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}))
app.set("view engine", ".hbs")
// Middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(expressSession({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true
}))


// Global Variables

// Routes
app.use(require("./src/routes/index"));
app.use(require("./src/routes/users"));
app.use(require("./src/routes/register"))

// Static files
app.use(express.static(path.join(__dirname, "src", "public")))

// Server init

app.listen(app.get("port"), () => console.log("port 3000"));