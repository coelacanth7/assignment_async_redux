import React from "react";
import Button from "./elements/Button";

const BookCard = ({ book }) => {
	return (
		<div className="card" style={{ maxWidth: "500px", minWidth: "250px" }}>
			<img className="card-img-top" src={book.best_book.image_url} />
			<div className="card-body">
				<h2>{book.best_book.title}</h2>
				<h5 className="card-title">{book.best_book.author.name}</h5>
				<p className="card-text">Rating: {book.average_rating}</p>
			</div>
		</div>
	);
};

export default BookCard;
