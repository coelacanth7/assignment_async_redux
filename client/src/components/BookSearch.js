import React from "react";

const BookSearch = ({ books, isFetching, onSubmit }) => {
	console.log("isFetching", isFetching);

	return (
		<form>
			<div className="form-row">
				<div className="col">
					<input type="text" className="form-control" placeholder="search..." />
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
	);
};

export default BookSearch;
