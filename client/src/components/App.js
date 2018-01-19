import React, { Component } from "react";
import "../App.css";
import JumbotronFluid from "./elements/JumbotronFluid";

class App extends Component {
	render() {
		return (
			<div className="App">
				<JumbotronFluid heading="book search" lead="seearch goodreads api" />
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
