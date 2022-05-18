import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
	return (
		<ul>
			{posts.map(post => (
				<li key={post.id}>
					<Link to={`/redux/board/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default PostList;
