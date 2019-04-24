import PropTypes from 'prop-types';
import React from 'react';

const Header = function(props) {
	return (
		<header>
			<h2>{props.title}</h2>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
