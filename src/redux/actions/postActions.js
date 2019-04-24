import { FETCH_POSTS, CREATE_NEW_POST } from './types';

const fetchPosts = (posts) => {
	return {
		type: FETCH_POSTS,
		payload: posts
	};
};

const createNewPost = (post) => {
	return {
		type: CREATE_NEW_POST,
		payload: post
	};
};

export const handleFetchPosts = function() {
	return async (dispatch) => {
		try {
			const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
			const posts = await resp.json();

			dispatch(fetchPosts(posts));
		}
		catch (error) {
			throw error;
		}
	};
};

export const handleCreateNewPost = function(post) {
	return async (dispatch) => {
		try {
			const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(post)
			});

			const newPost = await resp.json();

			dispatch(createNewPost(newPost));
		}
		catch (error) {
			throw error;
		}
	};
};
