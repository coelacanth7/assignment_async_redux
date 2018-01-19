import React from "react";
import BookList from "./BookList";
import SelectedBook from "./SelectedBook";

const BookSearch = ({ books, book, isFetching, onSubmit, onClick }) => {
	const bookList = (
		<BookList books={books} isFetching={isFetching} onClick={onClick} />
	);

	const selectedBook = <SelectedBook book={book} isFetching={isFetching} />;

	return (
		<div>
			{Object.keys(book).length ? selectedBook : <p>select a book...</p>}
			<form onSubmit={onSubmit}>
				<div className="form-row">
					<div className="col">
						<input
							type="text"
							name="query"
							className="form-control"
							placeholder="search..."
						/>
					</div>
					<div className="col">
						<input
							type="submit"
							className="form-control btn btn-success"
							placeholder="Last name"
						/>
					</div>
				</div>
			</form>
			{books.length ? bookList : <p>"no books my dude"</p>}
		</div>
	);
};

export default BookSearch;
