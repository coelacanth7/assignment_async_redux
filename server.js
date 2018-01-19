require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();

const express = require("express");
const app = express();

const KEY = process.env.KEY;
const baseUrl = "https://www.goodreads.com/";

// xml to json parsing
var parseString = require("xml2js").parseString;

app.set("port", process.env.PORT || 3001);
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

function checkStatus(response) {
	// If response not okay, throw an error
	if (!response.ok) {
		const error = new Error(response.statusText);
		error.response = response;
		throw error;
	}

	// Otherwise just return the response
	return response;
}

function parseJSON(response) {
	return response.json();
}

// search for books
app.get("api/goodreads/search", (req, res, next) => {});

// get info on a book
app.get("api/goodreads/book", (req, res, next) => {});

function errorHandler(err, req, res, next) {
	console.error(`Error: ${err.stack}`);
	res.status(err.response ? err.response.status : 500);
	res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});
