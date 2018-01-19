import React from "react";
import BookList from "./BookList";

const BookSearch = ({ books, isFetching, onSubmit }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-row">
					<div className="col">
						<input
							type="text"
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

			<BookList books={books} isFetching={isFetching} />
		</div>
	);
};

export default BookSearch;
