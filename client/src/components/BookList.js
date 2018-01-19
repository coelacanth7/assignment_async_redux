import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, isFetching }) => {
	const bookList = books.map((book, index) => (
		<BookCard book={book} key={index} />
	));

	return (
		<div className="container">
			<h1>Books:</h1>
			<div className="card-deck">
				{isFetching ? <h2>Loading...</h2> : bookList}
			</div>
		</div>
	);
};

export default BookList;
