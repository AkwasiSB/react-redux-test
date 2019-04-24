import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { handleFetchPosts } from '../../redux/actions/postActions';

export const PostItem = React.memo(function PostItem({ post }) {
	return (
		<div>
			<h3>{post.title}</h3>

			<p>{post.body}</p>
		</div>
	);
});

PostItem.propTypes = {
	post: PropTypes.shape({
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired
};

class Posts extends React.PureComponent {
	static propTypes = {
		fetchPosts: PropTypes.func.isRequired,
		posts: PropTypes.array.isRequired,
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				{this.props.posts.map(post => (
					<PostItem key={post.id} post={post} />
				))}
			</div>
		);
	}
}

function mapStateToProps({ postsData }) {
	return {
		posts: postsData.posts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: () => dispatch(handleFetchPosts())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
