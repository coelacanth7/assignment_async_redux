import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";

import { searchForBooks } from "../actions";
import BookSearch from "../components/BookSearch";

const mapStateToProps = state => {
	return {
		books: state.books,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: query => {
			dispatch(searchForBooks(query));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
