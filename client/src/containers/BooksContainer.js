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
		onSubmit: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data from form", data);
			dispatch(searchForBooks(data.query));
			// form.reset();
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
