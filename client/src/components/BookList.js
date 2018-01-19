import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, isFetching }) => {
	const bookList = books.map((book, index) => (
		<BookCard book={book} key={index} />
	));

	console.log("books", JSON.stringify(books, 0, 2));

	return (
		<div className="container-fluid">
			<h1>Books:</h1>
			<div className="card-group">
				{isFetching ? <h2>Loading...</h2> : bookList}
			</div>
		</div>
	);
};

export default BookList;
