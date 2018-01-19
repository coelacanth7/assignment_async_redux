export const GET_BOOK_REQUEST = "GET_BOOK_REQUEST";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";

export function getBOOKRequest() {
	return {
		type: GET_BOOK_REQUEST
	};
}

export function getBOOKSuccess(data) {
	return {
		type: GET_BOOK_SUCCESS,
		data
	};
}

export function getBOOKFailure(error) {
	return {
		type: GET_BOOK_FAILURE,
		error
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
				dispatch(getBOOKSuccess(json));
			})
			.catch(error => {
				dispatch(getBOOKFailure(error));
			});
	};
}
