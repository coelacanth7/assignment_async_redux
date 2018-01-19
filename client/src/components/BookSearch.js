import React from "react";
import BookList from "./BookList";

const BookSearch = ({ books, isFetching, onSubmit }) => {
	const bookList = <BookList books={books} isFetching={isFetching} />;

	return (
		<div>
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
