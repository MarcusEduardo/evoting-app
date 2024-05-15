import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = { hasError: false }

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}


	render() {
		if (this.state.hasError) {
			return (
				<div>
					Ha ocurrido un error...
				</div>
			)
		}

		return this.props.children; // return <App />
	}
}

export default ErrorBoundary;