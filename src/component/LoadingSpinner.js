import React, { Component } from "react";
//import StyleHome from './StyleHome.css';

class LoadingSpinner extends Component {
	render() {
		return (
			<div className="ui container">
				<div className="spinner">
					<i className="fa fa-spinner fa-spin" /> Cargando...
				</div>
			</div>
		);
	}
}

export default LoadingSpinner;