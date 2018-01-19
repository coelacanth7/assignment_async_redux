import {
	GET_BOOK_REQUEST,
	GET_BOOKS_SUCCESS,
	GET_BOOK_FAILURE,
	GET_SELECTED_BOOK_SUCCESS
} from "./actions";

const initialState = {
	books: [],
	book: {},
	isFetching: false,
	error: null
};

export function bookReducer(state = initialState, action) {
	switch (action.type) {
		case GET_BOOK_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case GET_BOOKS_SUCCESS:
			return {
				...state,
				books: action.data,
				isFetching: false
			};
		case GET_SELECTED_BOOK_SUCCESS:
			return {
				...state,
				book: action.data,
				isFetching: false
			};

		case GET_BOOK_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}
