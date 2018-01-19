import {
	GET_BOOK_REQUEST,
	GET_BOOK_SUCCESS,
	GET_BOOK_FAILURE
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
		case GET_BOOK_SUCCESS:
			return {
				...state,
				books: action.data,
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
