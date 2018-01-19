require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();

const express = require("express");
const app = express();

const KEY = process.env.KEY;
const baseUrl = "https://www.goodreads.com/";

// xml to json parsing
const fastXmlParser = require("fast-xml-parser");

app.set("port", process.env.PORT || 3001);
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

function checkStatus(response) {
	if (!response.ok) {
		const error = new Error(response.statusText);
		error.response = response;
		throw error;
	}

	return response;
}

function parseJSON(response) {
	return fastXmlParser.parse(response.body._buffer.toString());
}

// search for books
app.get("/api/goodreads/search", (req, res, next) => {
	console.log(`Requesting goodreads search info for ${req.query.search}`);
	fetch(`${baseUrl}search/index.xml?key=${KEY}&q=${req.query.search}`)
		.then(checkStatus)
		.then(parseJSON)
		.then(json => {
			// console.log("json", JSON.stringify(json, 0, 2));
			res.json(json);
		})
		.catch(error => {
			next(error);
		});
});

// get info on a book
app.get("/api/goodreads/book/", (req, res, next) => {
	console.log(`Requesting book info for ${req.query.id}`);

	fetch(`${baseUrl}book/show/4671.XML?key=${KEY}`)
		.then(checkStatus)
		.then(parseJSON)
		.then(json => {
			console.log("json", JSON.stringify(json, 0, 2));
			res.json(json);
		})
		.catch(error => {
			console.log(error);
			next(error);
		});
});

function errorHandler(err, req, res, next) {
	console.error(`Error: ${err.stack}`);
	res.status(err.response ? err.response.status : 500);
	res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}/`);
});
