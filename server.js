//find and use technologies we will use.
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const path = require("path");

(async () => {
	try {
		await mongoose.connect(db, { useNewUrlParser: true }) //our connection to mongoDB
		console.log("MongoDB connected successfully!")

		const app = express();
		app.disable("x-powered-by");
		//bodyparse middleware
		app.use(
			bodyParser.urlencoded({
				extended: false
			})
		); //parse the url

		app.use(bodyParser.json()); //parse to jason

		const db = require("./config/keys").mongoURI; //require config for DB


		//passport middleware
		app.use(passport.initialize());
		//passport configs
		require("./config/passport")(passport);
		//routes
		app.use("/api/users", users);
		//server static assets if in production
		if (process.env.NODE_ENV === "production") {
			//set a static folder
			app.use(express.static("client/build"));
			//app.use(express.static(path.join(__dirname, 'client/build')));

			app.get("*", (req, res) => {
				res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
			});
		}

		const port = process.env.PORT || 5000;

		app.listen(port, "0.0.0.0", () => {
			//let server listen on defined port
			console.log(`App listening on ${port}!`);
		})
	} catch (err) {
		console.log(err)
	}
})();