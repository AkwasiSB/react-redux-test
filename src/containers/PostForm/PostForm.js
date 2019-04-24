import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleCreateNewPost } from '../../redux/actions/postActions';

const PostForm = function(props) {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const formRef = React.createRef();

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}

	function handleBodyChange(e) {
		setBody(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();

		const post = {
			title,
			body
		};

		setTitle('');
		setBody('');

		props.createPost(post);
	}

	return (
		<form ref={formRef} onSubmit={handleFormSubmit}>
			<div>
				<label>Title: </label>
				<input type='text' value={title} onChange={handleTitleChange} />
			</div>

			<div>
				<label>Body: </label>
				<textarea value={body} onChange={handleBodyChange} />
			</div>
			<br />
			<button type='submit'>Submit</button>
		</form>
	);
};

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		createPost: (post) => dispatch(handleCreateNewPost(post))
	};
}

export default connect(null, mapDispatchToProps)(PostForm);
