import { FETCH_POSTS, CREATE_NEW_POST } from '../actions/types';

const initialState = {
	posts: []
};

const postReducer = (state = initialState, action) => {
	switch(action.type) {
	case FETCH_POSTS:
		return {
			...state,
			posts: action.payload
		};
	case CREATE_NEW_POST:
		return {
			...state,
			posts: [...state.posts, action.payload]
		};
	default:
		return state;
	}
};

export default postReducer;
