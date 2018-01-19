export const GET_BOOK_REQUEST = "GET_BOOK_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";
export const GET_SELECTED_BOOK_SUCCESS = "GET_SELECTED_BOOK_SUCCESS";

export function getBOOKRequest() {
	return {
		type: GET_BOOK_REQUEST
	};
}

export function getBOOKSSuccess(data) {
	return {
		type: GET_BOOKS_SUCCESS,
		data
	};
}

export function getBOOKFailure(error) {
	return {
		type: GET_BOOK_FAILURE,
		error
	};
}

export function getSelectedBookSuccess(data) {
	return {
		type: GET_SELECTED_BOOK_SUCCESS,
		data
	};
}

export function searchForBooks(query) {
	return dispatch => {
		dispatch(getBOOKRequest());

		fetch(`api/goodreads/search?search=${query}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}

				return response.json();
			})
			.then(json => {
				dispatch(getBOOKSSuccess(json.GoodreadsResponse.search.results.work));
			})
			.catch(error => {
				dispatch(getBOOKFailure(error));
			});
	};
}

export function getSelectedBook(id) {
	return dispatch => {
		dispatch(getBOOKRequest());

		fetch(`api/goodreads/book/?bookId=${id}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}

				return response.json();
			})
			.then(json => {
				console.log("json.GoodreadsResponse.book", json.GoodreadsResponse.book);
				dispatch(getSelectedBookSuccess(json.GoodreadsResponse.book));
			})
			.catch(error => {
				dispatch(getBOOKFailure(error));
			});
	};
}
