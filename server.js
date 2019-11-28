const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const path = require("path");
const db = require("./config/keys").mongoURI;
//const https = require("https");
//const fs = require("fs");

(async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB connected successfully!");
    const app = express();
    app.disable("x-powered-by");
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.use(function(req, res, next) {
    //   if (req.secure) {
    //     // request was via https, so do no special handling
    //     next();
    //   } else {
    //     // request was via http, so redirect to https
    //     res.redirect("https://" + req.headers.host + req.url);
    //   }
    // });
    app.use(passport.initialize());
    require("./config/passport")(passport);
    app.use("/api/users", users);
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
      //app.use(express.static(path.join(__dirname, 'client/build')));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
    const port = process.env.PORT || 5000;
    // https.createServer({
    // 	key: fs.readFileSync("./key.pem"),
    // 	cert: fs.readFileSync("./cert.pem"),
    // 	passphrase: "Holacode"
    // }
    app.listen(port, "0.0.0.0", () => {
      console.log(`App listening on ${port}!`);
    })
  } catch (err) {
    console.log(err);
  }
})();
