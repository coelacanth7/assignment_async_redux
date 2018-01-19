import React from "react";

const SelectedBook = ({ book, isFetching }) => {
	if (isFetching) {
		return <h2>Loading ur book...</h2>;
	}

	return (
		<div className="row">
			<div className="col-sm-4">
				<img src={book.image_url} />
			</div>
			<div className="col-sm-8">
				<h1>{book.title}</h1>
				<h2>{book.authors.author.name}</h2>
				<h5>Published: {book.work.original_publication_year}</h5>
				<p>{book.description}</p>
			</div>
		</div>
	);
};

export default SelectedBook;
