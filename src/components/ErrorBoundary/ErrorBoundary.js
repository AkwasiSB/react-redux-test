import PropTypes from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.PureComponent {
	static propTypes = {
		children: PropTypes.element
	}

	state = {
		isError: false,
	}

	static getDerivedStateFromError() {
		return {
			isError: true
		};
	}

	render() {
		if (!this.state.isError) {
			return this.props.children;
		}

		return (
			<p>Oops! an error occured. Please check your connection and try again :)</p>
		);
	}
}

export default ErrorBoundary;
