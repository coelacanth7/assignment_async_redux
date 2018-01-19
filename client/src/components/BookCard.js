import React from "react";
import Button from "./elements/Button";

const BookCard = ({ book, onClick }) => {
	return (
		<div
			className="card"
			style={{ maxWidth: "500px", minWidth: "250px" }}
			onClick={onClick}
		>
			<img
				className="card-img-top"
				src={book.best_book.image_url}
				name={book.best_book.id}
			/>
			<div className="card-body">
				<h2 name={book.best_book.id}>{book.best_book.title}</h2>
				<h5 className="card-title">{book.best_book.author.name}</h5>
				<p className="card-text">Rating: {book.average_rating}</p>
			</div>
		</div>
	);
};

export default BookCard;
