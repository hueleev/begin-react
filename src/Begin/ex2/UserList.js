import React, { useContext } from 'react';
import { UserDispatch } from './TestApp';

function User({ user }) {
	const dispatch = useContext(UserDispatch);

	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'green' : 'black',
				}}
				onClick={() => {
					dispatch({ type: 'TOGGLE_USER', id: user.id });
				}}
			>
				{user.username}
			</b>{' '}
			<span>({user.email})</span>
			<button
				onClick={() => {
					dispatch({ type: 'REMOVE_USER', id: user.id });
				}}
			>
				삭제
			</button>
		</div>
	);
}

function UserList({ users }) {
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
}

// 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 React.memo
export default React.memo(UserList);
